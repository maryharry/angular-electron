import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './detail.component';
import {AuthenticationGuard} from '../authguard/authentication.guard';

const routes: Routes = [
  {
    path: 'detail',
    component: DetailComponent,
    canActivate:[AuthenticationGuard]
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailRoutingModule {}
