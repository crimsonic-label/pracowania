import { Component, OnInit } from '@angular/core';
import { Picture } from '../../shared/picture';

@Component({
  selector: 'app-czeresnie',
  templateUrl: './czeresnie.component.html',
  styleUrls: ['./czeresnie.component.css']
})
export class CzeresnieComponent implements OnInit {

  pictures: Picture[] = [
    new Picture("assets/images/czeresnie/czer_01.jpg", "Czereśnie"),
    new Picture("assets/images/czeresnie/czer_02.jpg", "Czereśnie"),
    new Picture("assets/images/czeresnie/czer_03.jpg", "Czereśnie"),
    new Picture("assets/images/czeresnie/czer_04.jpg", "Czereśnie"),
    new Picture("assets/images/czeresnie/czer_05.jpg", "Czereśnie")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
