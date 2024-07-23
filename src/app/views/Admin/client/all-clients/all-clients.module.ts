import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllClientsRoutingModule } from './all-clients-routing.module';
import { AllClientsComponent } from './all-clients.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AllClientsComponent
  ],
  imports: [
    CommonModule,
    AllClientsRoutingModule,
    FormsModule
  ]
})
export class AllClientsModule { }
