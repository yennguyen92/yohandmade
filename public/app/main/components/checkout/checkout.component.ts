import {Component, AfterContentInit} from "@angular/core";

@Component({
    templateUrl: 'app/main/components/checkout/checkout.component.html',
    styleUrls: ['app/main/components/checkout/checkout.component.css']
})

export class CheckoutComponent implements AfterContentInit{
    ngAfterContentInit() {
        setTimeout(function(){
            jQuery('.close1').on('click', function(c){
                jQuery('.rem1').fadeOut('slow', function(c){
                    jQuery('.rem1').remove();
                });
            });
        },50);

        setTimeout(function(){
            jQuery('.close2').on('click', function(c){
                jQuery('.rem2').fadeOut('slow', function(c){
                    jQuery('.rem2').remove();
                });
            });
        },50);

    }
}