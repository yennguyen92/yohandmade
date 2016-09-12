import { Component} from '@angular/core';
import {RenderingUIComponent} from "../rendering-iu/rendering-ui.component";

@Component({
    templateUrl: 'app/main/components/home/home.component.html',
    styleUrls: ['app/main/components/home/home.component.css']
})
export class HomeComponent extends RenderingUIComponent {
    renderUI() {
        jQuery('#visual').pignoseLayerSlider({
            play    : '.btn-play',
            pause   : '.btn-pause',
            next    : '.btn-next',
            prev    : '.btn-prev'
        });
        jQuery('#horizontalTab').easyResponsiveTabs({
            type: 'default', //Types: default, vertical, accordion
            width: 'auto', //auto or any width like 600px
            fit: true   // 100% fit in a container
        });
    }

}