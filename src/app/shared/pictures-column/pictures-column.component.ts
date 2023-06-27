import { Component, OnInit, Input } from '@angular/core';
import { Picture } from '../picture'

@Component({
  selector: 'app-pictures-column',
  templateUrl: './pictures-column.component.html',
  styleUrls: ['./pictures-column.component.css']
})
export class PicturesColumnComponent implements OnInit {

  @Input() name: string;
  @Input() description: string;
  @Input() client: string;
  @Input() pictures: Picture[];

  constructor() { }

  ngOnInit(): void {
  }
}
