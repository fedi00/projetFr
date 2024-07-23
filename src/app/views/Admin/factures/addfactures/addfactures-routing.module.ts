import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddfacturesComponent } from './addfactures/addfactures.component';

const routes: Routes = [
  {path:'',component:AddfacturesComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddfacturesRoutingModule { }
