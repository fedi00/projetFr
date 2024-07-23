import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProduitComponent } from './all-produit.component';

const routes: Routes = [
  {path:"" , component:AllProduitComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllProduitRoutingModule { }
