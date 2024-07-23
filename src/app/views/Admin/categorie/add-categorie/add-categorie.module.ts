import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddCategorieRoutingModule } from './add-categorie-routing.module';
import { AddCategorieComponent } from './add-categorie.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddCategorieComponent
  ],
  imports: [
    CommonModule,
    AddCategorieRoutingModule,
    FormsModule
  ]
})
export class AddCategorieModule { }
