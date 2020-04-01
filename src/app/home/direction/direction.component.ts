import { Component, OnInit } from '@angular/core';
import { Picture } from '../../shared/picture'

@Component({
  selector: 'app-direction',
  templateUrl: './direction.component.html',
  styleUrls: ['./direction.component.css']
})
export class DirectionComponent implements OnInit {

  pictures: Picture[] = [
    new Picture("assets/images/m/migrantki_01.jpg", "Migrantki 1"),
    new Picture("assets/images/m/migrantki_02.jpg", "Migrantki 2"),
    new Picture("assets/images/m/migrantki_03.jpg", "Migrantki 3"),
    new Picture("assets/images/m/migrantki_04.jpg", "Migrantki 4"),
    new Picture("assets/images/m/migrantki_05.jpg", "Migrantki 5"),
    new Picture("assets/images/m/migrantki_06.jpg", "Migrantki 6"),
    new Picture("assets/images/m/migrantki_07.jpg", "Migrantki 7")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
