import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { RouterModule } from '@angular/router';
import { AuthUserComponent } from './auth-user/auth-user.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';



@NgModule({
  declarations: [
    UserLayoutComponent,
    AuthUserComponent,
    RegisteruserComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutsModule { }
