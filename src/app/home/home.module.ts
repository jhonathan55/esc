import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MaterialModule } from '../module/material/material.module';
import { SomosComponent } from '../pages/somos/somos.component';
import { ArancelesComponent } from '../pages/aranceles/aranceles.component';
@NgModule({
  declarations: [
    HomeComponent,
    SomosComponent,
    ArancelesComponent
  
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ],
  exports:[
    HomeComponent,
    SomosComponent,
    ArancelesComponent
  ]
})
export class HomeModule { }
