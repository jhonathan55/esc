import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MaterialModule } from '../module/material/material.module';
import { SomosComponent } from '../pages/somos/somos.component';
@NgModule({
  declarations: [
    HomeComponent,
    SomosComponent
  
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ],
  exports:[
    HomeComponent,
    SomosComponent
  ]
})
export class HomeModule { }
