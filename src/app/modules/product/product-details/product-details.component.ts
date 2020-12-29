import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HttpService } from '../../../shared/services/http.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private http: HttpService) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params.category);        
    console.log(this.route.snapshot.params.subcategory);
    console.log(this.route.snapshot.params.id);
  }

}
