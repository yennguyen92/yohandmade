import { Component} from '@angular/core';
import {RenderingUIAbstractComponent} from "../../../core/components/rendering-iu/rendering-ui.abstract.component";
import {Router} from "@angular/router";

@Component({
    selector:'gota-home-content',

    templateUrl: './products-content.component.html',
    styleUrls: ['./products-content.component.css']
})
export class ProductsContentComponent extends RenderingUIAbstractComponent {

  constructor(private router: Router) {
    super();
  }
    renderUI() {

    }

    onSelect(hero: any) {
        //this.router.navigate([crisis.id], { relativeTo: this.router });
        this.router.navigate(['/hero', hero.id]);
    }
}
