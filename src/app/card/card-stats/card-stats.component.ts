import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-stats',
  templateUrl: './card-stats.component.html',
  styleUrls: ['./card-stats.component.css'],
  host: {
    class: 'stats',
  },
})
export class CardStatsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
