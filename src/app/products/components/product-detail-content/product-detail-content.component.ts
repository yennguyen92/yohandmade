import { Component} from '@angular/core';
import {RenderingUIAbstractComponent} from "../../../core/components/rendering-iu/rendering-ui.abstract.component";
import '../../../../js/jquery.flexslider.js';
import '../../../../js/simpleCart.min.js';
import '../../../../js/imagezoom.js';


declare const module: any;
declare const jQuery: any;

@Component({
    selector:'gota-home-content',
    // __moduleName,
    templateUrl: './product-detail-content.component.html',
    styleUrls: ['./product-detail-content.component.css']
})
export class ProductDetailContentContentComponent extends RenderingUIAbstractComponent {
    renderUI() {
        //FlexSlider
            jQuery('.flexslider').flexslider({
                animation: "slide",
                controlNav: "thumbnails"
            });

        //FlexSlider
    }

}
