import { Component, AfterContentInit } from '@angular/core';

@Component({
    templateUrl: 'app/main/components/home/home.component.html',
    styleUrls: ['app/main/components/home/home.component.css']
})
export class HomeComponent implements AfterContentInit {
    ngAfterContentInit() {
        setTimeout(function(){
            jQuery('#visual').pignoseLayerSlider({
                play    : '.btn-play',
                pause   : '.btn-pause',
                next    : '.btn-next',
                prev    : '.btn-prev'
            });
        },50);

        setTimeout(function(){
            jQuery('#horizontalTab').easyResponsiveTabs({
                type: 'default', //Types: default, vertical, accordion
                width: 'auto', //auto or any width like 600px
                fit: true   // 100% fit in a container
            });
        },50);

    }

}