import {Component, OnInit, AfterViewInit} from '@angular/core';
declare const jQuery: any;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.sass']
})
export class CheckoutComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
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
