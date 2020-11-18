import { Component, OnInit } from '@angular/core';
import { Picture } from '../../shared/picture';

@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styleUrls: ['./radar.component.css']
})
export class RadarComponent implements OnInit {

  pictures: Picture[] = [
    new Picture("assets/images/radar/radar3.jpg", "Radar"),
    new Picture("assets/images/radar/rad2.png", "Radar")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
