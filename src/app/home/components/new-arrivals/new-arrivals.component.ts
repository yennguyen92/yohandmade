import { Component, OnInit } from '@angular/core';
import {RenderingUIAbstractComponent} from "../../../core/components/rendering-iu/rendering-ui.abstract.component";

@Component({
  selector: 'gota-new-arrivals',
  templateUrl: './new-arrivals.component.html',
  styleUrls: ['./new-arrivals.component.sass']
})
export class NewArrivalsComponent extends RenderingUIAbstractComponent {

  constructor() {
    super();
  }

  renderUI():void{
  }

}
