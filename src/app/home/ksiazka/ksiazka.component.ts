import { Component, OnInit } from '@angular/core';
import { Picture } from '../../shared/picture';

@Component({
  selector: 'app-ksiazka',
  templateUrl: './ksiazka.component.html',
  styleUrls: ['./ksiazka.component.css']
})
export class KsiazkaComponent implements OnInit {

  pictures: Picture[] = [
    new Picture("assets/images/ksiazka/k1.jpg", "W drodze"),
    new Picture("assets/images/ksiazka/k2.jpg", "Big Sur"),
    new Picture("assets/images/ksiazka/k3.jpg", "Włóczędzy Dharmy"),
    new Picture("assets/images/ksiazka/k4.jpg", "Podziemni Pic"),
    new Picture("assets/images/ksiazka/k5.jpg", "Maggie Cassidy")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
