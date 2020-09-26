import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
    templateUrl:'./product-home.component.html',
    styleUrls: ['./product-home.component.css']
})

export class ProductHomeComponent implements OnInit {
    productSubCategory : any = [];
    productNotFound = '';
    constructor(private route: ActivatedRoute, private router: Router, private http: HttpService){}

    ngOnInit(){        
        console.log(this.router.url);
        let category = this.router.url;
        this.http.get(category ,{options:''}).subscribe((data)=>{
            this.productSubCategory = data.productSubCategory;
        },
        (error)=>{
            this.handleError(error);
        }
    );
    }

    handleError(err){
        this.productNotFound = err;
    }
}