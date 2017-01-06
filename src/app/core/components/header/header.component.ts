import { Component} from '@angular/core';
import {RenderingUIAbstractComponent} from "../rendering-iu/rendering-ui.abstract.component";
declare const module: any;

@Component({
    selector:'gota-header',
    // || __moduleName,
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css']
})
export class HeaderComponent extends RenderingUIAbstractComponent {
    renderUI() {

    }

}
