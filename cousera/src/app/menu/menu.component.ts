import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  dishes: Dish[];

  constructor(private dishService: DishService) { }

  ngOnInit() {
    this.dishService.getDishes()                                
      .then((dishes => this.dishes = dishes))          //here dishes objects comesin when the promise resolves then the result is declared 
  }

}
