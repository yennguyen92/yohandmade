import { Component} from '@angular/core';
import {RenderingUIAbstractComponent} from "../../../core/components/rendering-iu/rendering-ui.abstract.component";
import '../../../../js/easyResponsiveTabs.js';
declare const jQuery: any;
@Component({
  selector: 'gota-home-page',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.sass']
})
export class HomePage extends RenderingUIAbstractComponent {
  renderUI() {
    jQuery('#horizontalTab').easyResponsiveTabs({
      type: 'default', //Types: default, vertical, accordion
      width: 'auto', //auto or any width like 600px
      fit: true   // 100% fit in a container
    });
  }
}
