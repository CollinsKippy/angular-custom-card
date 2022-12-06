import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-stat-segment',
  templateUrl: './card-stat-segment.component.html',
  styleUrls: ['./card-stat-segment.component.css'],
  host: {
    class: 'stat-segment',
  },
})
export class CardStatSegmentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
