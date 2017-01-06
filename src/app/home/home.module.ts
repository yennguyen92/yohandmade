import {homeRouting} from "./home.routing";
import {NgModule} from "@angular/core";

import {HomePage} from "./pages/home/home.page";
import { BannerGridComponent } from './components/banner-grid/banner-grid.component';
import { NewArrivalsComponent } from './components/new-arrivals/new-arrivals.component';
import { NewDiscountComponent } from './components/new-discount/new-discount.component';

@NgModule({
    imports: [
        homeRouting
    ],
    declarations: [
        HomePage,
        BannerGridComponent,
        NewArrivalsComponent,
        NewDiscountComponent
    ]
})
export class HomeModule {}
