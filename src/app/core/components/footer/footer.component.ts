import { Component} from '@angular/core';
import {RenderingUIAbstractComponent} from "../rendering-iu/rendering-ui.abstract.component";
declare const module: any;

@Component({
    selector: 'gota-footer',
    templateUrl: 'footer.component.html',
    styleUrls: ['footer.component.css']
})
export class FooterComponent extends RenderingUIAbstractComponent {
    renderUI() {

    }

}
