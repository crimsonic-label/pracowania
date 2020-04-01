import { Component, OnInit } from '@angular/core';
import { Picture } from '../../shared/picture';

@Component({
  selector: 'app-pl-d-graphics',
  templateUrl: './pl-d-graphics.component.html',
  styleUrls: ['./pl-d-graphics.component.css']
})
export class PlDGraphicsComponent implements OnInit {

  pictures: Picture[] = [
    new Picture("assets/images/pldgraphics/pl-d-graphics.png", "Relacje polsko-niemieckie")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
