import { Injectable } from '@angular/core';
import {Dish} from '../shared/dish';
import {DISHES} from '../shared/dishes';

import { resolve } from 'url';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }
  getDishes() : Observable<Dish []> {   //Here promise is gitven to the Dish arrar if thrpromise resolves then Dish arrary will be displayed
    return of(DISHES).pipe(delay(2000))   //this output will be shown if the problem is resolved
  }
  getDish (id:string) :Observable<Dish> {
    return  of(DISHES.filter ((dish) => (dish.id ==id))[0]).pipe(delay(2000))
   }
  getFeaturedDish () : Observable<Dish> {
    return  of(DISHES.filter ((dish) => dish.featured)[0]).pipe(delay(2000))    
  } 
}

 