import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonasComponent } from './personas/personas.component';
import { PersonasService } from './personas/personas.service';
import { HttpClientModule } from '@angular/common/http';
import { FomrsComponent } from './fomrs/fomrs.component';
import { FormsModule } from '@angular/forms';
import { CreateComponent } from './create/create.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    FomrsComponent,
    CreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PersonasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
