import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import {AuthenticationGuard} from '../authguard/authentication.guard';
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data:{toolbar:false}
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {}
