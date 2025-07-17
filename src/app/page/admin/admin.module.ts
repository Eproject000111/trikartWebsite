import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from 'src/app/shared.module';
import { MenuLeftComponent } from './layout/menu-left/menu-left.component';
import { TopBarComponent } from './layout/top-bar/top-bar.component';
import { DashboardComponent } from './screens/dashboard/dashboard.component';
import { CategoriesComponent } from './screens/categories/categories.component';
import { ProductsComponent } from './screens/products/products.component';
import { SettingsComponent } from './screens/settings/settings.component';
import { UsersComponent } from './screens/users/users.component';


@NgModule({
  declarations: [
    LayoutComponent,
    MenuLeftComponent,
    TopBarComponent,
    DashboardComponent,
    CategoriesComponent,
    ProductsComponent,
    SettingsComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
