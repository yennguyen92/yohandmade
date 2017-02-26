import {Component, OnInit, AfterViewInit} from '@angular/core';
import '../../../js/pignose.layerslider.js';
declare const jQuery: any;

@Component({
  selector: 'app-banner-grid',
  templateUrl: './banner-grid.component.html',
  styleUrls: ['./banner-grid.component.sass']
})
export class BannerGridComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    setTimeout(function() {
      jQuery('#visual').pignoseLayerSlider({
        play    : '.btn-play',
        pause   : '.btn-pause',
        next    : '.btn-next',
        prev    : '.btn-prev'
      });
    },500);
  }

}
