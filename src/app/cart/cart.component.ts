import { Component } from '@angular/core';
import {RenderingUIAbstractComponent} from "../core/components/rendering-iu/rendering-ui.abstract.component";

//noinspection TypeScriptValidateTypes
@Component({
    template:  `
    <gota-cart-content></gota-cart-content>
  `
})
export class CartComponent extends RenderingUIAbstractComponent{
    renderUI():void{

    }
}
