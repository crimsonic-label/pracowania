import { Component, OnInit } from '@angular/core';
import { Picture } from '../../shared/picture';

@Component({
  selector: 'app-green-book',
  templateUrl: './green-book.component.html',
  styleUrls: ['./green-book.component.css']
})
export class GreenBookComponent implements OnInit {

  pictures: Picture[] = [
    new Picture("assets/images/greenb/gb_0.png", "Green Book okładka"),
    new Picture("assets/images/greenb/gb_1.png", "Green Book 1" ),
    new Picture("assets/images/greenb/gb_2.png", "Green Book 2" ),
    new Picture("assets/images/greenb/gb_3.jpg", "Green Book 3" ),
    new Picture("assets/images/greenb/gb_5.jpg", "Green Book 5" )
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
