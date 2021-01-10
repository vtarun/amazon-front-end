import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';
import { ThemePalette } from '@angular/material/core';
import { HttpService } from '../../shared/services/http.service';

export interface Task {
    name: string;
    completed: boolean;
    color: ThemePalette;
    subtasks?: Task[];
  }


@Component({
    selector: 'app-product',
    templateUrl: 'product.component.html',
    styleUrls: ['product.component.css']
})

export class ProductComponent implements OnInit{
    panelOpenState = false;
    category: string = '';
    subcategory: string = '';
    constructor( private http: HttpService, private router: Router, private route: ActivatedRoute){}

    ngOnInit(){
        this.http.get().subscribe((resp: any) => {
          console.log(resp);
          console.log(resp.headers);
        });
        console.log(this.router.url);
        console.log(this.route.snapshot.params.category);        
        console.log(this.route.snapshot.params.subcategory);
        this.route.paramMap.subscribe(params => {
            this.category= params.get('category').toUpperCase();
            this.subcategory= params.get('subcategory').toUpperCase();
        });        
    }

    task: Task = {
        name: 'Indeterminate',
        completed: false,
        color: 'primary',
        subtasks: [
          {name: 'Primary', completed: false, color: 'primary'},
          {name: 'Accent', completed: false, color: 'accent'},
          {name: 'Warn', completed: false, color: 'warn'}
        ]
      };
    
      allComplete: boolean = false;
    
      updateAllComplete() {
        this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
      }      
      test(size){
        console.log(size);
        this.router.navigate(['hs'], { relativeTo: this.route });        
      }

}