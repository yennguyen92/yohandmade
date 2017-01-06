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
        //loadChildren: 'app/home/home.module#HomeModule'
        loadChildren: () => System.import('app/home/home.module').then(r => r.HomeModule)
    },
    {
        path: 'products',
        loadChildren: 'app/products/products.module#ProductsModule'
    },
    {
        path: 'contact',
        //loadChildren: 'app/contact/contact.module#ContactModule'
        loadChildren: () => System.import('app/contact/contact.module').then(r => r.ContactModule)
    },
    {
        path: 'cart',
        //loadChildren: 'app/cart/cart.module#CartModule'
        loadChildren: () => System.import('app/cart/cart.module').then(r => r.CartModule)
    },
    {
        path: 'blog',
        //loadChildren: 'app/blog/blog.module#BlogModule'
        loadChildren: () => System.import('app/blog/blog.module').then(r => r.BlogModule)
    },

];

export const mainRouting: ModuleWithProviders = RouterModule.forRoot(mainRoutes,{ useHash: true });


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
