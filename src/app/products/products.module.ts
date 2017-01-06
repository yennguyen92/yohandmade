
import {NgModule} from "@angular/core";
import {productsRouting} from "./products.routing";
import {ProductsComponent} from "./products.component";
import {ProductsContentComponent} from "./components/products-content/products-content.component";
import {CategoriesSidebarComponent} from "./components/categories-sidebar/categories-sidebar.component";
import {ProductCardComponent} from "./components/product-card/product-card.component";
import {ProductDetailContentContentComponent} from "./components/product-detail-content/product-detail-content.component";
import {ProductImageSliderComponent} from "./components/product-images-slider/product-images-slider.component";
import {RelatedProductsCarouselComponent} from "./components/related-products-carousel/related-products-carousel.component";

@NgModule({
    imports: [
        productsRouting
    ],
    declarations: [
        ProductsComponent,
        ProductsContentComponent,
        CategoriesSidebarComponent,
        ProductCardComponent,
        ProductDetailContentContentComponent,
        ProductImageSliderComponent,
        RelatedProductsCarouselComponent

    ]
})
export class ProductsModule {}
