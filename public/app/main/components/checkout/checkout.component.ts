import {Component, AfterContentInit} from "@angular/core";
import {RenderingUIAbstractComponent} from "../rendering-iu/rendering-ui.abstract.component";

@Component({
    templateUrl: 'app/main/components/checkout/checkout.component.html',
    styleUrls: ['app/main/components/checkout/checkout.component.css']
})

export class CheckoutComponent extends RenderingUIAbstractComponent{
    renderUI() {
        jQuery('.close1').on('click', function(c){
            jQuery('.rem1').fadeOut('slow', function(c){
                jQuery('.rem1').remove();
            });
        });
        jQuery('.close2').on('click', function(c){
            jQuery('.rem2').fadeOut('slow', function(c){
                jQuery('.rem2').remove();
            });
        });
    }
}