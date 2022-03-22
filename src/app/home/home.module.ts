import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MaterialModule } from '../module/material/material.module';
import { SomosComponent } from '../pages/somos/somos.component';
import { ArancelesComponent } from '../pages/aranceles/aranceles.component';
import { PreguntasComponent } from '../pages/preguntas/preguntas.component';
import { NoticiasComponent } from '../pages/noticias/noticias.component';
@NgModule({
  declarations: [
    HomeComponent,
    SomosComponent,
    ArancelesComponent,
    PreguntasComponent,
    NoticiasComponent
  
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ],
  exports:[
    HomeComponent,
    SomosComponent,
    ArancelesComponent,
    PreguntasComponent,
    NoticiasComponent
  ]
})
export class HomeModule { }
