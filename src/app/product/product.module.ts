import { NgModule } from '@angular/core';

import { ProductRoutingModule } from 'src/app/product/product.routing.module';

import { ProductDetailsComponent } from 'src/app/product/product-details/product-details.component';
import { ProductHomeComponent } from 'src/app/product/product-home.component';
import { ProductListComponent } from 'src/app/product/product-list/product-list.component';
import { SecondaryNavigationComponent } from 'src/app/product/secondary-navigation/secondary-navigation.component';
import { CommonModule } from '@angular/common';



@NgModule({
    declarations: [
        ProductDetailsComponent, 
        ProductHomeComponent, 
        ProductListComponent,
        SecondaryNavigationComponent
    ],
    imports: [CommonModule, ProductRoutingModule],
    exports: []
})

export class ProductModule{
    constructor(){
        console.log('i am from product module');
    }
}