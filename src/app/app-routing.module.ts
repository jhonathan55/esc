import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
 
  //cuando no existe ninguna redirección te dirige a home sirve para apuntar a home desde el principio NOTA:siempre va al final
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
