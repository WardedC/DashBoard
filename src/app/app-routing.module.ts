import { Routes } from '@angular/router';
import { DashboardPageComponent } from './pages/dashboardPage/dashboardPage.component';

export const routes: Routes = [

  { path: '', redirectTo: '/DashBoard', pathMatch: 'full' }, // Redirige a home por defecto
  { path: 'DashBoard', component: DashboardPageComponent },
  // { path: '**', component: PageNotFoundComponent }


];
