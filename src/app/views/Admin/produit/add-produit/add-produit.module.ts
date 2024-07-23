import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddProduitRoutingModule } from './add-produit-routing.module';
import { AddProduitComponent } from './add-produit.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddProduitComponent
  ],
  imports: [
    CommonModule,
    AddProduitRoutingModule,
    FormsModule
  ]
})
export class AddProduitModule { }
