import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-content',
  templateUrl: './card-content.component.html',
  styleUrls: ['./card-content.component.css'],
  host: {
    class: `content`,
  },
})
export class CardContentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
