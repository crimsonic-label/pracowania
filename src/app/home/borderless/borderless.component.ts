import { Component, OnInit } from '@angular/core';
import { Picture } from '../../shared/picture';

@Component({
  selector: 'app-borderless',
  templateUrl: './borderless.component.html',
  styleUrls: ['./borderless.component.css']
})
export class BorderlessComponent implements OnInit {

  pictures: Picture[] = [
    new Picture("assets/images/borderless/eraker_00.jpg", "Borderless People okładka"),
    new Picture("assets/images/borderless/eraker_01.png", "Borderless People"),
    new Picture("assets/images/borderless/eraker_02.png", "Borderless People"),
    new Picture("assets/images/borderless/eraker_03.png", "Borderless People")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
