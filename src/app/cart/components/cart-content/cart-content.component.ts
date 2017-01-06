import { Component} from '@angular/core';
import {RenderingUIAbstractComponent} from "../../../core/components/rendering-iu/rendering-ui.abstract.component";
declare const module: any;
declare const jQuery: any;


@Component({
    selector:'gota-cart-content',

    templateUrl: './cart-content.component.html',
    styleUrls: ['./cart-content.component.css']
})
export class CartContentComponent extends RenderingUIAbstractComponent {
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

        jQuery('.close3').on('click', function(c){
            jQuery('.rem3').fadeOut('slow', function(c){
                jQuery('.rem3').remove();
            });
        });

        jQuery('.close4').on('click', function(c){
            jQuery('.rem4').fadeOut('slow', function(c){
                jQuery('.rem4').remove();
            });
        });

        jQuery('.value-plus').on('click', function(){
            var divUpd = jQuery(this).parent().find('.value'), newVal = parseInt(divUpd.text(), 10)+1;
            divUpd.text(newVal);
        });

        jQuery('.value-minus').on('click', function(){
            var divUpd = jQuery(this).parent().find('.value'), newVal = parseInt(divUpd.text(), 10)-1;
            if(newVal>=1) divUpd.text(newVal);
        });
    }


}
