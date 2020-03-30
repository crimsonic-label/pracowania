import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pictures-column',
  templateUrl: './pictures-column.component.html',
  styleUrls: ['./pictures-column.component.css']
})
export class PicturesColumnComponent implements OnInit {

  @Input() name: string;
  @Input() description: string;
  @Input() client: string;
  @Input() pictures: any[];

  constructor() { }

  ngOnInit(): void {
  }
}
