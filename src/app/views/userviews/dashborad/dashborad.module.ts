import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboradRoutingModule } from './dashborad-routing.module';
import { DashboradComponent } from './dashborad/dashborad.component';


@NgModule({
  declarations: [
    DashboradComponent
  ],
  imports: [
    CommonModule,
    DashboradRoutingModule
  ]
})
export class DashboradModule { }
