import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {ProductImageSliderComponent} from "./components/product-images-slider/product-images-slider.component";
import {ProductsComponent} from "./products.component";
import {ProductsContentComponent} from "./components/products-content/products-content.component";
import {ProductDetailContentContentComponent} from "./components/product-detail-content/product-detail-content.component";
const productsRoutes: Routes = [
    {
        path: ':categoryId',
        component: ProductsComponent,
        children:[
            { path: '', component: ProductsContentComponent },
            { path: ':productId', component: ProductDetailContentContentComponent }
        ]
    }
];

export const productsRouting: ModuleWithProviders = RouterModule.forChild(productsRoutes);