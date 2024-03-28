import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterreservationComponent } from './ajouterreservation/ajouterreservation.component';

const routes: Routes = [
  {path:'',component:AjouterreservationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AjouterreservationRoutingModule { }
