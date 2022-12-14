import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  host: {
    class: `card`,
  },
  encapsulation: ViewEncapsulation.None,
})
export class CardComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
