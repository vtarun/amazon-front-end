import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HttpService } from '../../../shared/services/http.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productId: string;
  productImg: string;
  productDetails: any;
  sizes: any = [];
  ratings: number;
  reviews: number;
  sellerRating: number;
  toggled: boolean = false;
  constructor(private route: ActivatedRoute, private http: HttpService) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params.category);        
    console.log(this.route.snapshot.params.subcategory);
    console.log(this.route.snapshot.params.id);
    this.productId = this.route.snapshot.params.id;
    this.loadProductDetails(this.productId)
  }
  
  loadProductDetails(productId){
    this.http.get().subscribe(data=>{
      this.productDetails = data;
      this.productImg = "../../../../assets/images/tshirt_01.jpeg";
    });
    this.productImg = "../../../../assets/images/tshirt_02.jpeg";   
    this.sizes = ['S', 'M', 'L', 'XL', 'XXL'];
    this.sellerRating = 2.3;
  }
  test(size){
    console.log(size);
  }
}
