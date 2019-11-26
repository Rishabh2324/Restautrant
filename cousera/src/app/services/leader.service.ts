import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADER } from '../shared/leaders';
@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }
  getLeaders(): Promise<Leader[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(LEADER), 1000)
    });   //t
  }
  getLeader(id: string): Promise<Leader> {
    return new Promise(resolve => {
      setTimeout(() => resolve(LEADER.filter((leader) => (leader.id == id))[0]), 1000)
    });   //t
  }
  getFeaturedLeader(): Promise<Leader> {
    return new Promise(resolve => {
      setTimeout(() => resolve(LEADER.filter((leader) => leader.featured)[0]), 1000)
    });



    Promise.resolve(LEADER.filter((leader) => leader.featured)[0]);
  }
}

