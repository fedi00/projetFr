import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllClientsComponent } from './all-clients.component';

const routes: Routes = [
  {path:'',component:AllClientsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllClientsRoutingModule { }
