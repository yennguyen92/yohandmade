import { Component, ElementRef, Input} from '@angular/core';
import {RenderingUIAbstractComponent} from "../../../core/components/rendering-iu/rendering-ui.abstract.component";

declare const jQuery: any;
@Component({
    selector:'gota-categories-sidebar',
    templateUrl: './categories-sidebar.component.html',
    styleUrls: ['./categories-sidebar.component.css']
})
export class CategoriesSidebarComponent extends RenderingUIAbstractComponent {
    public display: Boolean;
    constructor(private elementRef:ElementRef){
      super();
      this.display=true;
    }
    renderUI() {
       let _this = this;
       setTimeout(function(){
         _this.display=false;
       },1000);

      jQuery( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 9000,
        values: [ 1000, 7000 ],
        slide: function( event, ui ) {
          jQuery( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        }
      });
      jQuery( "#amount" ).val( "$"
        + jQuery( "#slider-range" ).slider( "values", 0 )
        + " - $" + jQuery( "#slider-range" ).slider( "values", 1 )
      );


    }

    getSidebarWidth(){
        return this.elementRef.nativeElement.getElementsByClassName('categories-sidebar-content')[0].offsetWidth;
    }
    switchCategoriesSidebar($event: any){
        this.display=!this.display;
        if(this.display){
            document.body.style.overflowY='hidden';
        }else {
            document.body.style.overflowY='scroll';
        }

        /*
        let classList = $event.target.classList;

        if(classList.contains("glyphicon-chevron-right")){
            classList.remove('glyphicon-chevron-right');
            classList.add('glyphicon-chevron-left');
            hideCategoriesSidebar();
        } else {
            classList.remove('glyphicon-chevron-left');
            classList.add('glyphicon-chevron-right');
            showCategoriesSidebar();
        }
*/
    }

    @Input('display')
    set updateInternalVal(display) {
        this.display = display;
    }

}
