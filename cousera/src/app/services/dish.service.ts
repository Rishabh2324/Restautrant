import { Injectable } from '@angular/core';
import {Dish} from '../shared/dish';
import {DISHES} from '../shared/dishes';
import { resolve } from 'url';
@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }
  getDishes() : Promise<Dish []> {   //Here promise is gitven to the Dish arrar if thrpromise resolves then Dish arrary will be displayed
    return new Promise (resolve =>{
      setTimeout(() => resolve(DISHES),1000)
    });   //this output will be shown if the problem is resolved
  }
  getDish (id:string) :Promise<Dish> {
    return  new Promise (resolve =>{
      setTimeout(() => resolve(DISHES.filter ((dish) => (dish.id ==id))[0]),1000)
    })
    
  }
  getFeaturedDish () : Promise<Dish> {
    return  new Promise (resolve =>{
      setTimeout(() => resolve(DISHES.filter ((dish) => dish.featured)[0]),1000)
    })
  } 
}

 