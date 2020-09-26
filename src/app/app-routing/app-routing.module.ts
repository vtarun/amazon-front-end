import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { CartComponent } from 'src/app/cart/cart.component';
import { ProfileComponent } from '../profile/profile.component';
import { LoginComponent } from '../login/login.component';

import { AuthGuard } from '../services/auth/auth.guard'; 

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cart', component: CartComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },  
  // {path:'product', component: ProductComponent, canActivate:[AuthGuard]},  
  { path: '', redirectTo: '/home', pathMatch: 'full' }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
