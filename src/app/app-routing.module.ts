import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LayoutModule } from './layouts/layout.module';
import { RawComponent } from './layouts/raw/raw.component';
import { LoginComponent } from './page/auths/login/login.component';
import { LayoutComponent } from './page/admin/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '',
    component: RawComponent,
    children:[
      {
        path:'',
        loadChildren:() => import('../app/page/website/website.module').then((m)=>m.WebsiteModule)
      }
    ]

  },
  {
    path: 'admin',
    component: LayoutComponent,
    children:[
      {
        path:'',
        loadChildren:() => import('../app/page/admin/admin.module').then((m)=>m.AdminModule)
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent

  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    LayoutModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
