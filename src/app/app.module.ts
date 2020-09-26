import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MyLibModule, MyLibService } from 'my-lib'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './services/auth/auth.guard';
import { NavigationModule } from './navigation/navigation.module';
import { NavigationComponent } from 'src/app/navigation/navigation.component';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { HttpService } from 'src/app/services/http/http.service';
import { ProductModule } from 'src/app/product/product.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    ProfileComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NavigationModule,
    ProductModule,
    AppRoutingModule,
       
  ],
  providers: [AuthGuard, AuthService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
