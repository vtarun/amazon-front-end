import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secondary-navigation',
  templateUrl: './secondary-navigation.component.html',
  styleUrls: ['./secondary-navigation.component.css']
})
export class SecondaryNavigationComponent implements OnInit {
  @Input('list') productLists;
  constructor(private router: Router) { }

  ngOnInit(){        
    console.log(this.router.url)
    setTimeout(()=>{
        this.productLists.push('lola jj lola');
    },5000) 
}

}
