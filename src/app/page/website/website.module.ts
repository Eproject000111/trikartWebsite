import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebsiteRoutingModule } from './website-routing.module';
import { SharedModule } from 'src/app/shared.module';
import { LandingPageComponent } from './screens/landingPage/landing-page.component';
import { ProductListComponent } from './screens/products/product-list/product-list.component';
import { ProductDetailsComponent } from './screens/products/product-details/product-details.component';
import { ProductCardComponent } from './screens/products/product-card/product-card.component';
import { CartComponent } from './screens/cart/cart.component';


@NgModule({
  declarations: [
    LandingPageComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ProductCardComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    SharedModule
  ]
})
export class WebsiteModule { }
