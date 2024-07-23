import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddpanierComponent } from './addpanier/addpanier.component';
import { ShowpanierComponent } from './showpanier/showpanier.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'addpanier', component: AddpanierComponent },
  { path: 'showpanier', component: ShowpanierComponent }

];

@NgModule({
  declarations: [
    AddpanierComponent,
    ShowpanierComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes) // Utilisation de forChild pour les routes enfants

  ]
})
export class PanierModule { }
