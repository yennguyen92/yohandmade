import { Component } from '@angular/core';
import {RenderingUIAbstractComponent} from "../core/components/rendering-iu/rendering-ui.abstract.component";

//noinspection TypeScriptValidateTypes
@Component({
    template:  `
    <gota-blog-content></gota-blog-content>
  `
})
export class BlogComponent extends RenderingUIAbstractComponent{
    renderUI():void{

    }
}
