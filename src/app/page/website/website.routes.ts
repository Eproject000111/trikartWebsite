import { Routes } from '@angular/router';
import { LandingPageComponent } from './screens/landingPage/landing-page.component';
import { ProductListComponent } from './screens/products/product-list/product-list.component';
import { ProductDetailsComponent } from './screens/products/product-details/product-details.component';
import { CartComponent } from './screens/cart/cart.component';

export const WebsiteRoutes: Routes = [
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
      },
      {
        path:'',
        component: LandingPageComponent
      },
      {
        path:'product/list',
        component: ProductListComponent
      },
      {
        path:'product/details',
        component: ProductDetailsComponent
      },
      {
        path:'cart',
        component: CartComponent
      }
]
