import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: any = []; 
  constructor(private http: HttpService, private router: Router) { }

  ngOnInit(): void {
    console.log(this.router.url);
    let category = this.router.url;
    this.http.get(category, {options: ''}).subscribe((data)=>{
      this.productList = data.productList;
    },(error)=> {
      this.handleError(error);
    });
  }

  handleError(err){
    console.log(err);
  }

}
