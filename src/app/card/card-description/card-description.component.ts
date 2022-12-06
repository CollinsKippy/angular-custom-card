import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-description',
  templateUrl: './card-description.component.html',
  styleUrls: ['./card-description.component.css'],
  host: {
    class: 'description',
  },
})
export class CardDescriptionComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
