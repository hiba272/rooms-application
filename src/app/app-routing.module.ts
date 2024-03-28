import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { AuthUserComponent } from './layouts/auth-user/auth-user.component';
import { RegisteruserComponent } from './layouts/registeruser/registeruser.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'user',component:UserLayoutComponent,children:[
    {path:'dashboard',loadChildren:()=>import('./views/userviews/dashborad/dashborad.module').then(m=>m.DashboradModule)},
    {path:'reservations',loadChildren:()=>import('./views/userviews/reservations/reservations.module').then(m=>m.ReservationsModule)},
    {path:'ajouterreservation',loadChildren:()=>import('./views/userviews/ajouterreservation/ajouterreservation.module').then(m=>m.AjouterreservationModule)},
    {path:'',loadChildren:()=>import('./views/userviews/dashborad/dashborad.module').then(m=>m.DashboradModule)},
  ]},
{path:'user/login',component:AuthUserComponent},
{path:'user/register',component:RegisteruserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
