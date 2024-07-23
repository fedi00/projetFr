import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AllProduitRoutingModule } from './all-produit-routing.module';
import { AllProduitComponent } from './all-produit.component';


@NgModule({
  declarations: [
    AllProduitComponent
  ],
  imports: [
    CommonModule,
    AllProduitRoutingModule,
    FormsModule,
  ]
})
export class AllProduitModule { }
