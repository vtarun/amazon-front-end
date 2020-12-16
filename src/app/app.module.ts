import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NavigationComponent } from './navigation/navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { TodaysellComponent } from './todaysell/todaysell.component';
import { AddressComponent } from './address/address.component';
import { TrackOrderComponent } from './track-order/track-order.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';

import { RoutingModule } from './routing/routing.module';

import { AuthService } from './services/auth.service';
import { HttpService } from './services/http/http.service';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    HomeComponent,
    CartComponent,
    TodaysellComponent,
    AddressComponent,
    TrackOrderComponent,
    ProfileComponent,
    LoginSignupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    HttpClientModule,
    FormsModule,
    RoutingModule,
    MaterialModule
  ],
  providers: [AuthService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
