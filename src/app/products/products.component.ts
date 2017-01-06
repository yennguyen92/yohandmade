import { Component } from '@angular/core';
import {RenderingUIAbstractComponent} from "../core/components/rendering-iu/rendering-ui.abstract.component";

//noinspection TypeScriptValidateTypes
@Component({
    template:  `
    <router-outlet></router-outlet>
    <gota-categories-sidebar></gota-categories-sidebar>
  `
})
export class ProductsComponent extends RenderingUIAbstractComponent{
    renderUI():void{

    }
}
