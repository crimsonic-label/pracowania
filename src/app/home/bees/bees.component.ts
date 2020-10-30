import { Component, OnInit } from '@angular/core';
import { Picture } from '../../shared/picture';

@Component({
  selector: 'app-bees',
  templateUrl: './bees.component.html',
  styleUrls: ['./bees.component.css']
})
export class BeesComponent implements OnInit {

  pictures: Picture[] = [
    new Picture("assets/images/bees/bees_01.jpg", "3BEES 1"),
    new Picture("assets/images/bees/bees_02.jpg", "3BEES 2"),
    new Picture("assets/images/bees/bees_03.jpg", "3BEES 3")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
