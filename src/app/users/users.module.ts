import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';

import { UsersComponent } from './users.component';
import { SharedModule } from '../shared/shared.module';

import { SearchPipe } from '../pipe/search.pipe';
@NgModule({
  declarations: [UsersComponent,SearchPipe],
  imports: [CommonModule, SharedModule, UsersRoutingModule]
})
export class UsersModule {}
