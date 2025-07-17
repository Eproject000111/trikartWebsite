import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './screens/dashboard/dashboard.component';
import { UsersComponent } from './screens/users/users.component';
import { ProductsComponent } from './screens/products/products.component';
import { CategoriesComponent } from './screens/categories/categories.component';
import { SettingsComponent } from './screens/settings/settings.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'dashboard',
		pathMatch: 'full'
	},
	{
		path: 'dashboard',
		component: DashboardComponent
	},
	{
		path: 'users',
		component: UsersComponent
	},
	{
		path: 'products',
		component: ProductsComponent
	},
	{
		path: 'categories',
		component: CategoriesComponent
	},
	{
		path: 'settings',
		component: SettingsComponent
	},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
