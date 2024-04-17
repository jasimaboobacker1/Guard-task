import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { authGuard } from './Guards/auth.guard';
import { UserhomeComponent } from './userhome/userhome.component';
import { UsermanageComponent } from './usermanage/usermanage.component';
import { ProductmanageComponent } from './productmanage/productmanage.component';
import { permissionGuard } from './Guards/permission.guard';

export const routes: Routes = [
    // {
    //     path:'',
    //     component:HomeComponent
    // },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path: 'about',
        component: AboutComponent,
        canDeactivate: [(component: AboutComponent) => component.canExit()]
    },
    
    {
        path:'products',
        component:ProductsComponent
    },
    {
        path:'userhome',
        component:UserhomeComponent,
        canActivate:[authGuard],
        
    },
    {
        path:'admindashboard',
        component:AdmindashboardComponent,
        canActivate:[authGuard],
    },
    {
        path:'usermanage',
        component:UsermanageComponent,
        canActivate:[permissionGuard]
    },
    {
        path:'productmanage',
        component:ProductmanageComponent,
        canActivate:[permissionGuard]
    },
   
    

];
