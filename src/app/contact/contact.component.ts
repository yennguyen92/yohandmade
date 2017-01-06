import { Component } from '@angular/core';
import {RenderingUIAbstractComponent} from "../core/components/rendering-iu/rendering-ui.abstract.component";

//noinspection TypeScriptValidateTypes
@Component({
    template:  `
    <gota-home-content></gota-home-content>
  `
})
export class ContactComponent extends RenderingUIAbstractComponent{
    renderUI():void{

    }
}
