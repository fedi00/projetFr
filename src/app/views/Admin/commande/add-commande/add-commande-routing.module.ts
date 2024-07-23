import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCommandeComponent } from './add-commande.component';

const routes: Routes = [
  {path:'',component:AddCommandeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddCommandeRoutingModule { }
