import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-title',
  templateUrl: './card-title.component.html',
  styleUrls: ['./card-title.component.css'],
  host: {
    class: 'title',
  },
})
export class CardTitleComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
