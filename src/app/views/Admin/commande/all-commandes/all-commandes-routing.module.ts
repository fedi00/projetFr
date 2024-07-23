import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCommandesComponent } from './all-commandes.component';

const routes: Routes = [
  {path:'',component:AllCommandesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllCommandesRoutingModule { }
