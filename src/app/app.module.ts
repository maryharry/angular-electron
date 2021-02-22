import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';

/* components */
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ComponentsModule } from './components/components.module';


/* Modules */
import { HomeModule } from './home/home.module';
import { DetailModule } from './detail/detail.module';
import { RegisterModule } from './register/register.module';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './pages/products/products.module';

/* App Routing module */
import { AppRoutingModule } from './app-routing.module';

//Auth Gaurd Service
import { AuthGuardService } from './services/auth-guard.service';
import { CommonService } from './services/common.service'
import { NavigationService} from './services/navigation.service';

/* NG Translate */
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

/* shared module */
import { SharedModule } from './shared/shared.module';

// import to manage form validation
import { ReactiveFormsModule } from '@angular/forms';
// import { CartItemPipe } from './pipe/cart-item.pipe';


//import motify  module 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import {SidebarModule} from 'ng-sidebar'


import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

// load language json file
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/languages/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
    
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    HomeModule,
    DetailModule,
    SharedModule,
    RegisterModule,
    UsersModule,
    ProductsModule,
    AppRoutingModule,
    ComponentsModule,
    BrowserAnimationsModule,
    SidebarModule.forRoot(),
    MatButtonModule, MatIconModule, 
    ToastrModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [AuthGuardService,CommonService,NavigationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
