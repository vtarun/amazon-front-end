import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProductDetailsComponent } from 'src/app/product/product-details/product-details.component';
import { ProductListComponent } from 'src/app/product/product-list/product-list.component';
import { ProductHomeComponent } from 'src/app/product/product-home.component';

const routes: Routes = [
    {path:'', component : ProductHomeComponent, children: [
        { path: ':category', component: ProductDetailsComponent },
        { path: ':category/:id', component: ProductListComponent }        
    ]}      
];

@NgModule({
    declarations:[],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductRoutingModule{
    constructor(){
        console.log('i am from product module');
    }
}