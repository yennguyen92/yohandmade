import {Component, OnInit, AfterViewInit} from '@angular/core';
import '../../../js/easyResponsiveTabs.js';
declare const jQuery: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {

    jQuery('#horizontalTab').easyResponsiveTabs({
      type: 'default', //Types: default, vertical, accordion
      width: 'auto', //auto or any width like 600px
      fit: true   // 100% fit in a container
    });
  }

}
