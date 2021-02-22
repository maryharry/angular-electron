import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import {AuthenticationGuard} from '../authguard/authentication.guard';

const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent,
    canActivate:[AuthenticationGuard]
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
