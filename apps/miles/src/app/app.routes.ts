import { Route } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const appRoutes: Route[] = [
  {path: '', component: WelcomeComponent},
  {path: 'dashboard', component: DashboardComponent},
  
  { path: 'login', component: LoginComponent },
  // Uncomment the following line to redirect to login by default
  // { path: '', redirectTo: 'login', pathMatch: 'full' },    
];
