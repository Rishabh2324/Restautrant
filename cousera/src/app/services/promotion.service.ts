import { Injectable } from '@angular/core';
import {Promotion} from '../shared/promotion';
import {PROMOTION} from '../shared/promotions';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() {}
  getPromotions() : Promise<Promotion []> {
    return Promise.resolve(PROMOTION);
  }
  getPromotion (id:string) :Promise<Promotion> {
    return  Promise.resolve(PROMOTION.filter ((promo) => (promo.id ==id))[0]);
  }
  getFeaturedPromotion () : Promise<Promotion> {
    return  Promise.resolve(PROMOTION.filter ((promo) => promo.featured)[0]);
  } 
}
