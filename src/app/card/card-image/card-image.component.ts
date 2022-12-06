import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-image',
  templateUrl: './card-image.component.html',
  styleUrls: ['./card-image.component.css'],
  host: {
    class: 'image',
  },
})
export class CardImageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
