import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AllfacturesComponent } from './allfactures/allfactures.component';

const routes: Routes = [
  {path:'',component:AllfacturesComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllfacturesRoutingModule { }
