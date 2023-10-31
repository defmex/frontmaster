import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonasService } from 'src/app/personas/personas.service';
import { Persona } from '../personas/persona';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  persona: Persona = {
    nombre: '',
    apellido: '',
    fecha_nacimiento: '',
  };
  constructor(private personaService: PersonasService, private router: Router, private activatedRoute: ActivatedRoute) { }

  creaPersona() {
    this.personaService.createPersona(this.persona).subscribe(res => {
      this.router.navigate([''])
    },
    )
  }
}
