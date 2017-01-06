import { Component} from '@angular/core';
import {RenderingUIAbstractComponent} from "../../../core/components/rendering-iu/rendering-ui.abstract.component";
declare const module: any;

@Component({
    selector:'gota-home-content',

    templateUrl: './contact-content.component.html',
    styleUrls: ['./contact-content.component.css']
})
export class ContactContentComponent extends RenderingUIAbstractComponent {
    renderUI() {

    }

}
