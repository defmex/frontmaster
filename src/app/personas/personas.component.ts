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
  //@Input() persona: Persona;
  data: Persona[] = [];

  constructor(private personaService: PersonasService, private router: Router) { }

  ngOnInit(): void {
    this.getPersonas();
    this.personaService.getPersona('2').subscribe(persona => {
      //this.data1 = persona;
      console.log('Nombre de la persona con id=2: ', persona);
    })
  }

  getPersonas() {
    this.personaService.getPersonas().subscribe(personas => {
      this.data = personas;
      console.log(this.data);
    })
  }
  /*updatePersona(id: number, persona: Persona) {
    this.personaService.putPersona(id, persona).subscribe(() => {
      this.router.navigate(['/editar/' + id])
    })
  }*/


  deletePersona(id: string | undefined) {
    this.personaService.deletePersona(id).subscribe(() => {
      console.log('listo');
    });
  }


}

/*
  personas: Observable<Persona>;
  constructor(private personaService: PersonasService) { }
  ngOnInit() {
    this.personas = this.personaService.getPersonas();
  }
  */