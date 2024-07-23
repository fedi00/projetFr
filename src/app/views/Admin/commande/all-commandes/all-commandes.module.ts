import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllCommandesRoutingModule } from './all-commandes-routing.module';
import { AllCommandesComponent } from './all-commandes.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AllCommandesComponent
  ],
  imports: [
    CommonModule,
    AllCommandesRoutingModule,
    FormsModule, // Ajoutez cette ligne

  ]
})
export class AllCommandesModule { }
