import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddfacturesRoutingModule } from './addfactures-routing.module';
import { AddfacturesComponent } from './addfactures/addfactures.component';



@NgModule({
  declarations: [
    AddfacturesComponent
  ],
  imports: [
    CommonModule,
    AddfacturesRoutingModule
  ]
})
export class AddfacturesModule { }
