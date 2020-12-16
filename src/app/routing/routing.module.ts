import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { CartComponent } from '../cart/cart.component';
import { LoginSignupComponent } from '../login-signup/login-signup.component';
import { AddressComponent } from '../address/address.component';
import { ProfileComponent } from '../profile/profile.component';
import { TodaysellComponent } from '../todaysell/todaysell.component';
import { TrackOrderComponent } from '../track-order/track-order.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cart', component: CartComponent },
  { path: 'login', component: LoginSignupComponent },
  { path: 'address', component: AddressComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'todaysell', component: TodaysellComponent },
  { path: 'trackorder', component: TrackOrderComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthGuard],
  exports: [RouterModule]
})
export class RoutingModule { }
