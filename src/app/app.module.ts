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
import { LoginSignupComponent } from './login-signup/login-signup.component';

import { RoutingModule } from './routing/routing.module';

import { MaterialModule } from './material/material.module';
import { HttpService } from './shared/services/http.service';
import { httpInterceptorProviders } from './shared/interceptors';

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
  providers: [HttpService, httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
