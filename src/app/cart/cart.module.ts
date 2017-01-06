
import {NgModule} from "@angular/core";
import {cartRouting} from "./cart.routing";
import {CartComponent} from "./cart.component";
import {CartContentComponent} from "./components/cart-content/cart-content.component";

@NgModule({
    imports: [
        cartRouting
    ],
    declarations: [
        CartComponent,
        CartContentComponent
    ]
})
export class CartModule {}
