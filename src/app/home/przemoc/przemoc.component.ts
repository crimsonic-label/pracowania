import { Component, OnInit } from '@angular/core';
import { Picture } from '../../shared/picture';

@Component({
  selector: 'app-przemoc',
  templateUrl: './przemoc.component.html',
  styleUrls: ['./przemoc.component.css']
})
export class PrzemocComponent implements OnInit {

  pictures: Picture[] = [
    new Picture("assets/images/przemoc/01.jpg", "Przemoc"),
    new Picture("assets/images/przemoc/02.png", "Przemoc"),
    new Picture("assets/images/przemoc/03.png", "Przemoc"),
    new Picture("assets/images/przemoc/04.png", "Przemoc"),
    new Picture("assets/images/przemoc/05.png", "Przemoc")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
