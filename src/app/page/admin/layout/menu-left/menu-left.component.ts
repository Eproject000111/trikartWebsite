import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModules } from '../../../../antd.module';
import { ConditionalModule } from '../../../../conditional.module';

@Component({
  selector: 'app-menu-left',
  standalone: true,
  imports:[
	...ConditionalModule,
	...NzModules['NzLayout'],
	...NzModules['NzMenu']
  ],
  templateUrl: './menu-left.component.html',
  styleUrls: ['./menu-left.component.scss']
})
export class MenuLeftComponent implements OnInit {
	routerLink = 'admin';

	sideMenu = [
		{
			item: 'Dashboard',
			routerLink: '/dashboard',
			selected: true
		},
		{
			item: 'Users',
			routerLink: '/users',
			selected: false
		},
		{
			item: 'Categories',
			routerLink: '/categories',
			selected: false
		},
		{
			item: 'Products',
			routerLink: '/products',
			selected: false
		},
		{
			item: 'Website Settings',
			routerLink: '/settings',
			selected: false
		}
	]


	constructor(
		private router: Router
	){

	}

	ngOnInit(): void {

	}

	sideBarMenuClick(data:any){
		console.log(data)
		this.router.navigateByUrl(`${this.routerLink}${data['routerLink']}`)
	}

}
