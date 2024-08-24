import { Routes } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboardPage/dashboardPage.component';
import { FromsComponent } from './pages/froms/froms.component';
import { GaleryComponent } from './pages/Galery/Galery.component';
import { ProductsComponent } from './pages/products/products.component';

export const routes: Routes = [

  { path: '', redirectTo: '/DashBoard', pathMatch: 'full' }, // Redirige a home por defecto
  { path: 'DashBoard', component: DashboardPageComponent },
  { path: 'Forms', component: FromsComponent },
  { path: 'Galery', component: GaleryComponent },
  { path: 'Products', component: ProductsComponent }


];
