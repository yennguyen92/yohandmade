import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';

import { HomeComponent } from './components/home/home.component';

import { ContactComponent } from './components/contact/contact.component';

import { CheckoutComponent } from './components/checkout/checkout.component'
import {ProductsComponent} from "./components/products/products.component";

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component:HomeComponent
  },
  {
    path: 'contact',
    component:ContactComponent
  },
  {
    path:'checkout',
    component:CheckoutComponent
  },
  {
    path:'products',
    component:ProductsComponent
  }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/