import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'user',component:UserLayoutComponent,children:[
    {path:'dashboard',loadChildren:()=>import('./views/userviews/dashborad/dashborad.module').then(m=>m.DashboradModule)},
    {path:'',loadChildren:()=>import('./views/userviews/dashborad/dashborad.module').then(m=>m.DashboradModule)}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
