
import { Component, OnInit, Input } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
@Component({
  selector: 'app-dishdetails',
  templateUrl: './dishdetails.component.html',
  styleUrls: ['./dishdetails.component.css']
})
export class DishdetailsComponent implements OnInit {
    
    dish: Dish;
  

  constructor(private dishService:DishService, private location:Location , private route :ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.dishService.getDish(id)
      .subscribe((dish => this.dish = dish))       //here dishes objects comesin when the promise resolves then the result is declared 
  }
  goBack() : void {
    this.location.back();
  }

}
