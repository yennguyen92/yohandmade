import {Component, OnInit, Input, AfterViewInit, ElementRef} from '@angular/core';
declare const jQuery: any;
declare const document: any;


@Component({
  selector: 'app-categories-sidebar',
  templateUrl: './categories-sidebar.component.html',
  styleUrls: ['./categories-sidebar.component.scss']
})
export class CategoriesSidebarComponent implements AfterViewInit {

  public display: Boolean;
  constructor(private elementRef:ElementRef){
    this.display=true;
  }

  ngAfterViewInit() {
    let _this = this;
    setTimeout(function(){
      _this.display=false;
      jQuery( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 9000,
        values: [ 1000, 7000 ],
        slide: function( event, ui ) {  jQuery( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        }
      });
      jQuery( "#amount" )
        .val( "$" + jQuery( "#slider-range" )
            .slider( "values", 0 ) + " - $" + jQuery( "#slider-range" )
            .slider( "values", 1 ) );

    },1000);
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
