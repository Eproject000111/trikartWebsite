import { Routes } from '@angular/router';
import { RawComponent } from './layout/raw/raw.component';
import { LayoutComponent } from './page/admin/layout/layout.component';
import { LoginComponent } from './component/auth/login/login.component';

export const routes: Routes = [
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
            loadChildren:() => import('../app/page/website/website.routes').then((m)=>m.WebsiteRoutes)
        }
    ]

    },
    {
        path: 'admin',
        component: LayoutComponent,
        children:[
            {
                path:'',
                loadChildren:() => import('../app/page/admin/admin.routes').then((m)=>m.AdminRoute)
            }
        ]
    },
    {
        path: 'login',
        component: LoginComponent
    },
];
