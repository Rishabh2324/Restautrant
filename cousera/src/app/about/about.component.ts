import { Component, OnInit } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADER } from '../shared/leaders'
import { LeaderService } from '../services/leader.service'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  leaders: Leader[] = LEADER;

  constructor(private leaderService: LeaderService) { }

  ngOnInit() {
    this.leaderService.getLeaders()
      .then((leaders => this.leaders = leaders))
  }

}
