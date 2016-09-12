import {Component, AfterContentInit, ViewEncapsulation, AfterViewChecked} from "@angular/core";
import "jquery/responsive-slides";
import {RenderingUIComponent} from "../rendering-iu/rendering-ui.component";
import {log} from "typings/dist/support/cli";

@Component({
    templateUrl: 'app/main/components/products/products.component.html',
    styleUrls: ['app/main/components/products/products.component.css']
})

export class ProductsComponent extends RenderingUIComponent{

    renderUI(){
        jQuery("#slider-range").slider({
            range: true,
            min: 0,
            max: 9000,
            values: [1000, 7000],
            slide: function (event, ui) {
                jQuery("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });
        jQuery("#amount").val("$" + jQuery("#slider-range").slider("values", 0) + " - $" + jQuery("#slider-range").slider("values", 1));


        // Slideshow 4
        jQuery("#slider3").responsiveSlides({
            auto: true,
            pager: true,
            nav: false,
            speed: 500,
            namespace: "callbacks",
            before: function () {
                jQuery('.events').append("<li>before event fired.</li>");
            },
            after: function () {
                jQuery('.events').append("<li>after event fired.</li>");
            }
        });
    }
}