import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { CartComponent } from '../cart/cart.component';
import { AddressComponent } from '../address/address.component';
import { TodaysellComponent } from '../todaysell/todaysell.component';
import { TrackOrderComponent } from '../track-order/track-order.component';
import { LoginSignupComponent } from '../login-signup/login-signup.component';



const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cart', component: CartComponent },
  { path: 'login', component: LoginSignupComponent },
  { path: 'product' , loadChildren: () => import('../modules/product/product.module').then(m => m.ProductModule)},
  { path: 'address', component: AddressComponent },
  { path: 'todaysell', component: TodaysellComponent },
  { path: 'trackorder', component: TrackOrderComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  exports: [RouterModule]
})
export class RoutingModule { }
