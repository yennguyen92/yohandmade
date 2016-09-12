import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }       from './app.component';
import { routing} from './app.routing';

import {AppMenuComponent} from './components/app-menu/app-menu.component'

import { HomeComponent } from './components/home/home.component';

import { ContactComponent } from './components/contact/contact.component';
import {CheckoutComponent} from './components/checkout/checkout.component';
import { DialogService }  from './services/dialog.service';
import {ProductsComponent} from "./components/products/products.component";



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    AppMenuComponent,
    HomeComponent,
    ContactComponent,
    ProductsComponent,
    CheckoutComponent
  ],
  providers: [
    DialogService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/