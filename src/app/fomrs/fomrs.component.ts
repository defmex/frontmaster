import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonasService } from 'src/app/personas/personas.service';
import { Persona } from '../personas/persona';

@Component({
  selector: 'app-fomrs',
  templateUrl: './fomrs.component.html',
  styleUrls: ['./fomrs.component.css']
})
export class FomrsComponent implements OnInit {
  persona: Persona = {
    nombre: '',
    apellido: '',
    fecha_nacimiento: '',
  };
  constructor(private personaService: PersonasService, private router: Router, private activatedRoute: ActivatedRoute) { }
  ngOnInit() {
    this.cargar();
  }
  cargar(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params) {
      this.personaService.getPersona(params['id']).subscribe(data => {
        this.persona = data;
      })
    }
  }
  actualizarDato(): void {
    this.personaService.putPersona(this.persona.id, this.persona).subscribe(() => {
      this.router.navigate([''])
    },
    );
  }


}
