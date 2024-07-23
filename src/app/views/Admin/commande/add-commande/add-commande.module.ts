import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddCommandeRoutingModule } from './add-commande-routing.module';
import { AddCommandeComponent } from './add-commande.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddCommandeComponent
  ],
  imports: [
    CommonModule,
    AddCommandeRoutingModule,
    FormsModule,
  ]
})
export class AddCommandeModule { }
