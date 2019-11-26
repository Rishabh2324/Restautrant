import { Injectable } from '@angular/core';
import {Dish} from '../shared/dish';
import {DISHES} from '../shared/dishes';
@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }
  getDishes() : Promise<Dish []> {   //Here promise is gitven to the Dish arrar if thrpromise resolves then Dish arrary will be displayed
    return Promise.resolve(DISHES);   //this output will be shown if the problem is resolved
  }
  getDish (id:string) :Promise<Dish> {
    return  Promise.resolve(DISHES.filter ((dish) => (dish.id ==id))[0]);
  }
  getFeaturedDish () : Promise<Dish> {
    return  Promise.resolve(DISHES.filter ((dish) => dish.featured)[0]);
  } 
}

 