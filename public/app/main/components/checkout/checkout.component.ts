import {Component, AfterContentInit} from "@angular/core";
import {RenderingUIComponent} from "../rendering-iu/rendering-ui.component";

@Component({
    templateUrl: 'app/main/components/checkout/checkout.component.html',
    styleUrls: ['app/main/components/checkout/checkout.component.css']
})

export class CheckoutComponent extends RenderingUIComponent{
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