import { Component, OnInit } from '@angular/core';
import { Picture } from '../../shared/picture';

@Component({
  selector: 'app-inspirator',
  templateUrl: './inspirator.component.html',
  styleUrls: ['./inspirator.component.css']
})
export class InspiratorComponent implements OnInit {

  pictures: Picture[] = [
    new Picture("assets/images/insp/inspirator1.jpg", "Inspirator"),
    new Picture("assets/images/insp/inspirator2.jpg", "Inspirator"),
    new Picture("assets/images/insp/inspirator3.jpg", "Inspirator"),
    new Picture("assets/images/insp/inspirator4.jpg", "Inspirator"),
    new Picture("assets/images/insp/inspirator5.jpg", "Inspirator")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
