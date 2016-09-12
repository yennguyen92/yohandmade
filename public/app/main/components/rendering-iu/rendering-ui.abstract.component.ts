import {AfterViewChecked} from "@angular/core";
export abstract class RenderingUIAbstractComponent implements AfterViewChecked{

    private isRedered:boolean=false
    ngAfterViewChecked() {
        if(!this.isRedered) {
            this.renderUI();
            this.isRedered=true;
        }
    }

    abstract renderUI(): void;
}