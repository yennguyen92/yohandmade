import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { CardComponent } from './components/card/card.component';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CategoriesSidebarComponent } from './components/categories-sidebar/categories-sidebar.component';


import { BannerGridComponent } from './components/banner-grid/banner-grid.component';
import { NewArrivalsComponent } from './components/new-arrivals/new-arrivals.component';
import { NewDiscountComponent } from './components/new-discount/new-discount.component';

import {appRouting} from "./app.routing";
import { APP_BASE_HREF } from '@angular/common';
import { ProductsContentComponent } from './pages/products-content/products-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    CheckoutComponent,
    ProductsComponent,
    ProductDetailComponent,
    CardComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    CategoriesSidebarComponent,
    BannerGridComponent,
    NewArrivalsComponent,
    NewDiscountComponent,
    ProductsContentComponent
  ],
  imports: [
    appRouting,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
