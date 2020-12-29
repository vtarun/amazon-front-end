import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductComponent } from './product.component';
import { ProductNotFOundComponent } from './product-not-found/product-not-found.component';

const routes: Routes = [    
    { path: ':category/:subcategory', component: ProductComponent },
    { path: ':category/:subcategory/:id', component: ProductDetailsComponent },
    { path: '' , component: ProductNotFOundComponent }
] 

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class ProductRoutingModule{

}