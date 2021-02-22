import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from '../../pages/products/products.component';
import {AuthenticationGuard} from '../../authguard/authentication.guard';

const routes: Routes = [
  {
    path: 'products',
    component: ProductsComponent,
    canActivate:[AuthenticationGuard]
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {}
