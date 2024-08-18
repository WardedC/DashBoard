import { Routes } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboardPage/dashboardPage.component';
import { FromsComponent } from './pages/froms/froms.component';

export const routes: Routes = [

  { path: '', redirectTo: '/DashBoard', pathMatch: 'full' }, // Redirige a home por defecto
  { path: 'DashBoard', component: DashboardPageComponent },
  { path: 'Forms', component: FromsComponent }


];
