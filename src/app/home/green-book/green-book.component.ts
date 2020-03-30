import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-green-book',
  templateUrl: './green-book.component.html',
  styleUrls: ['./green-book.component.css']
})
export class GreenBookComponent implements OnInit {

  pictures: any[]

  constructor() { }

  ngOnInit(): void {
    this.pictures = [
      { src: "assets/images/greenb/gb_0.png", alt: "Green Book okładka" },
      { src: "assets/images/greenb/gb_1.png", alt: "Green Book 1" },
      { src: "assets/images/greenb/gb_2.png", alt: "Green Book 2" },
      { src: "assets/images/greenb/gb_3.jpg", alt: "Green Book 3" },
      { src: "assets/images/greenb/gb_5.jpg", alt: "Green Book 5" }
    ];
  }

}
