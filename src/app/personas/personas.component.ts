import { Component, OnInit, Input } from '@angular/core';
import { PersonasService } from './personas.service';
import { Persona } from './persona';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent {
  data: Persona[] = [];

  constructor(private personaService: PersonasService, private router: Router) { }

  ngOnInit(): void {
    this.getPersonas();
  }

  getPersonas() {
    this.personaService.getPersonas().subscribe(personas => {
      this.data = personas;
    })
  }

  deletePersona(id: string | undefined) {
    this.personaService.deletePersona(id).subscribe(() => {
      console.log('listo');
      window.location.reload();
    });
  }
}

