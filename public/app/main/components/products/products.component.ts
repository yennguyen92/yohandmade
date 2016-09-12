import {Component, AfterContentInit} from "@angular/core";

@Component({
    templateUrl: 'app/main/components/products/products.component.html',
    styleUrls: ['app/main/components/products/products.component.css']
})

export class ProductsComponent implements AfterContentInit{
    ngAfterContentInit() {
        setTimeout(function(){
            jQuery( "#slider-range" ).slider({
                range: true,
                min: 0,
                max: 9000,
                values: [ 1000, 7000 ],
                slide: function( event, ui ) {  jQuery( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
                }
            });
            jQuery( "#amount" ).val( "$" + jQuery( "#slider-range" ).slider( "values", 0 ) + " - $" + jQuery( "#slider-range" ).slider( "values", 1 ) );

        },50);

        setTimeout(function(){
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
        },50);

    }
}