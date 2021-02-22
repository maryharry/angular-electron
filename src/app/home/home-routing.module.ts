import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import {AuthenticationGuard} from '../authguard/authentication.guard';
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate:[AuthenticationGuard]
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
