import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductRoutingModule } from './product.routing.module';
import { ProductComponent } from './product.component';
import { ProductNotFOundComponent } from './product-not-found/product-not-found.component';

export const COMPONENTS = [ProductComponent, ProductNotFOundComponent, ProductDetailsComponent]

@NgModule({
  declarations: COMPONENTS,
  imports: [
    CommonModule,
    MaterialModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
