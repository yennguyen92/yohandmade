import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { MainComponent }         from './main.component';
import { mainRouting }  from './main.routing';

import {FooterComponent} from "./components/footer/footer.component";
import {HeaderComponent} from "./components/header/header.component";
import {MenuComponent} from "./components/menu/menu.component";
import { CardComponent } from './components/card/card.component';
import { ProductCardComponent } from './components/product-card/product-card.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    mainRouting
  ],
  declarations: [
    MainComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    CardComponent,
    ProductCardComponent
  ],
  providers: [
  ],
  bootstrap: [ MainComponent ]
})
export class MainModule {
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
