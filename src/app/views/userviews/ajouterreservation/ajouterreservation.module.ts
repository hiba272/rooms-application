import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AjouterreservationRoutingModule } from './ajouterreservation-routing.module';
import { AjouterreservationComponent } from './ajouterreservation/ajouterreservation.component';


@NgModule({
  declarations: [
    AjouterreservationComponent
  ],
  imports: [
    CommonModule,
    AjouterreservationRoutingModule
  ]
})
export class AjouterreservationModule { }
