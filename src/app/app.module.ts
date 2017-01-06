import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

import { AppComponent }         from './app.component';
import { mainRouting }  from './main.routing';

import {FooterComponent} from "./core/components/footer/footer.component";
import {HeaderComponent} from "./core/components/header/header.component";
import {MenuComponent} from "./core/components/menu/menu.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    mainRouting
  ],
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent
  ],
  providers: [
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
