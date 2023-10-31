import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonasComponent } from './personas/personas.component'
import { FomrsComponent } from './fomrs/fomrs.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  { path: '', component: PersonasComponent },
  { path: 'editar/:id', component: FomrsComponent },
  { path: 'crear', component: CreateComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
