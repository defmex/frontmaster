import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Persona } from './persona';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {
  constructor(private http: HttpClient) { }

  getPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>('http://localhost:3051/personas');
  }
  getPersona(id: string): Observable<Persona> {
    return this.http.get<Persona>('http://localhost:3051/personas/' + id);
  }
  putPersona(id: string | undefined, persona: Persona): Observable<Persona> {
    return this.http.put<Persona>('http://localhost:3051/personas/' + id, persona);
  }
  createPersona(persona: Persona): Observable<any> {
    return this.http.post<any>('http://localhost:3051/personas', persona);
  }
  deletePersona(id: string | undefined): Observable<Persona> {
    return this.http.delete<Persona>('http://localhost:3051/personas/' + id);
  }

}