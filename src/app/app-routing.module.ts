import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LayoutModule } from './layouts/layout.module';
import { RawComponent } from './layouts/raw/raw.component';

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

  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    LayoutModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
