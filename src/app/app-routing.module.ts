import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components';

import { LoginRoutingModule} from './login/login-routing.module';
import { HomeRoutingModule } from './home/home-routing.module';
import { DetailRoutingModule } from './detail/detail-routing.module';
import { RegisterRoutingModule } from './register/register-routing.module';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'login', // default HomeRoutingModule calling 
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    LoginRoutingModule,
    HomeRoutingModule,
    DetailRoutingModule,
    RegisterRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }