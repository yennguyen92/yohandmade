import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {HomeComponent} from "./pages/home/home.component";
import {ContactComponent} from "./pages/contact/contact.component";
import {CheckoutComponent} from "./pages/checkout/checkout.component";
import {ProductsComponent} from "./pages/products/products.component";
import {ProductDetailComponent} from "./pages/product-detail/product-detail.component";
import {ProductsContentComponent} from "./pages/products-content/products-content.component";
import {NewsComponent} from "./pages/news/news.component";
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '_contact', component: ContactComponent },
  { path: 'checkout', component: CheckoutComponent},
  { path: 'news', component: NewsComponent},
  {
    path: 'product/:categoryId',
    component: ProductsComponent,
    children:[
      { path: '', component: ProductsContentComponent },
      { path: ':productId', component: ProductDetailComponent }
    ]
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
  // ,
  // { path: '**', component: PageNotFoundComponent }
];


export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes,{ useHash: true });
