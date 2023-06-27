import { Component, OnInit } from '@angular/core';
import { Picture } from '../../shared/picture';

@Component({
  selector: 'app-panska',
  templateUrl: './panska.component.html',
  styleUrls: ['./panska.component.css']
})
export class PanskaComponent implements OnInit {

  pictures: Picture[] = [
    new Picture("assets/images/panska/p1.jpg", "Logo"),
    new Picture("assets/images/panska/p2.jpg", "Fizytówka"),
    new Picture("assets/images/panska/p3.jpg", "Foto 1"),
    new Picture("assets/images/panska/p4.jpg", "Foto 2"),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
