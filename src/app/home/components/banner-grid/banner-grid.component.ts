import { Component, OnInit } from '@angular/core';
import {RenderingUIAbstractComponent} from "../../../core/components/rendering-iu/rendering-ui.abstract.component";
import '../../../../js/pignose.layerslider.js';
declare const jQuery: any;

/**
 * top of body content
 */

@Component({
  selector: 'gota-banner-grid',
  templateUrl: './banner-grid.component.html',
  styleUrls: ['./banner-grid.component.sass']
})
export class BannerGridComponent extends RenderingUIAbstractComponent {

  constructor() {
    super();
  }

  renderUI():void{
    jQuery('#visual').pignoseLayerSlider({
      play    : '.btn-play',
      pause   : '.btn-pause',
      next    : '.btn-next',
      prev    : '.btn-prev'
    });
  }
}
