import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCategoriesComponent } from './all-categories.component';

const routes: Routes = [
  {path:'',component:AllCategoriesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllCategoriesRoutingModule { }
