import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() name:string;
  @Input() price:number;
  @Input() imageURL:string;
}
