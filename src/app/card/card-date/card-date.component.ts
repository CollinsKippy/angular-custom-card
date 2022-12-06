import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-date',
  templateUrl: './card-date.component.html',
  styleUrls: ['./card-date.component.css'],
  host: {
    class: 'date',
  },
})
export class CardDateComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
