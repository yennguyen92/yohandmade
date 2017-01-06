import {AfterViewChecked, ElementRef, AfterViewInit} from "@angular/core";
export abstract class RenderingUIAbstractComponent implements AfterViewInit{

    ngAfterViewInit() {
      let _this = this;
      setTimeout(function() {
        _this.renderUI();
      },500);
    }

    abstract renderUI(): void;
}
