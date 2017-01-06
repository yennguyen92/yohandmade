import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {CartComponent} from "./cart.component";
const cartRoutes: Routes = [
    {
        path: '',
        component: CartComponent
    }
];

export const cartRouting: ModuleWithProviders = RouterModule.forChild(cartRoutes);