import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';

import { ProductsComponent } from './products.component';
import { SharedModule } from '../../shared/shared.module';
import { CartItemPipe } from '../../pipe/cart-item.pipe';

@NgModule({
  declarations: [ProductsComponent,CartItemPipe],
  imports: [CommonModule, SharedModule, ProductsRoutingModule]
})
export class ProductsModule {}
