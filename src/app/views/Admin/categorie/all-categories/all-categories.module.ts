import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllCategoriesRoutingModule } from './all-categories-routing.module';
import { AllCategoriesComponent } from './all-categories.component';
import { FormsModule } from '@angular/forms' ;



@NgModule({
  declarations: [
    AllCategoriesComponent
  ],
  imports: [
    CommonModule,
    AllCategoriesRoutingModule,
     FormsModule,
     
  ]
})
export class AllCategoriesModule { }
