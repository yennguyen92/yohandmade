import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

declare const System: any;
const mainRoutes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
         loadChildren: 'home/home.module#HomeModule'
        //loadChildren: () => System.import('client/home/home.module').then(r => r.HomeModule)
    },
    {
        path: 'products',
        loadChildren: 'client/products/products.module#ProductsModule'
    },
    {
        path: 'contact',
        // loadChildren: 'client/contact/contact.module#ContactModule'
        loadChildren: () => System.import('client/contact/contact.module').then(r => r.ContactModule)
    },
    {
        path: 'cart',
        // loadChildren: 'client/cart/cart.module#CartModule'
        loadChildren: () => System.import('client/cart/cart.module').then(r => r.CartModule)
    },
    {
        path: 'blog',
        // loadChildren: 'client/blog/blog.module#BlogModule'
        loadChildren: () => System.import('client/blog/blog.module').then(r => r.BlogModule)
    },

];

export const mainRouting: ModuleWithProviders = RouterModule.forRoot(mainRoutes,{ useHash: true });


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
