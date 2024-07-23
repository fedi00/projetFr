import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllfacturesRoutingModule } from './allfactures-routing.module';
import { AllfacturesComponent } from './allfactures/allfactures.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AllfacturesComponent,
    
  ],
  imports: [
    CommonModule,
    AllfacturesRoutingModule,
    FormsModule, // Ajoutez cette ligne

  ]
})
export class AllfacturesModule { }
