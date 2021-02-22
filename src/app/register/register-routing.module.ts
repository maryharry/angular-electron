import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register.component';
import {AuthenticationGuard} from '../authguard/authentication.guard';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
    canActivate:[AuthenticationGuard]
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule {}
