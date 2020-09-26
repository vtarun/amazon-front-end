import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productDetails: any;
  constructor(private router: Router, private http: HttpService) { }

  ngOnInit(): void {
    console.log(this.router.url);
    let category = this.router.url;
    this.http.get(category, {options: ''}).subscribe((data)=>{
      this.productDetails = data.productDetails;
    },(error)=> {
      this.handleError(error);
    });
  }

  handleError(err){
    console.log(err);
  }

}
