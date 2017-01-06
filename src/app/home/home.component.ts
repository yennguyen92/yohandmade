import { Component } from '@angular/core';
import {RenderingUIAbstractComponent} from "../core/components/rendering-iu/rendering-ui.abstract.component";

//noinspection TypeScriptValidateTypes
@Component({
    template:  `
    <gota-home-page></gota-home-page>
  `
})
export class HomeComponent extends RenderingUIAbstractComponent{
    renderUI():void{

    }
}
