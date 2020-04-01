import { Component, OnInit } from '@angular/core';
import { Picture } from '../../shared/picture';

@Component({
  selector: 'app-chopin',
  templateUrl: './chopin.component.html',
  styleUrls: ['./chopin.component.css']
})
export class ChopinComponent implements OnInit {

  pictures: Picture[]

  constructor() { }

  ngOnInit(): void {
    this.pictures = [
      new Picture("assets/images/chopin/chopin_01.jpg", "Chopin 1"),
      new Picture("assets/images/chopin/chopin_02.jpg", "Chopin 2" ),
      new Picture("assets/images/chopin/chopin_03.jpg", "Chopin 3" ),
      new Picture("assets/images/chopin/chopin_04.jpg", "chopin 4" ),
    ];
  }

}
