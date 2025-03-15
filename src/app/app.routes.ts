import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './Pages/landingpage/landingpage.component';
import { LoginComponent } from './Pages/login/login.component';
import { UserDashboardComponent } from './Modules/userdashboard/userdashboard.component';
// Remove direct imports of PlanComponent and ProfileComponent here since they'll be managed internally

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent }, // Assuming this is your landing page
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: UserDashboardComponent },
  { path: 'plan', component: UserDashboardComponent }, // Route to UserDashboardComponent
  { path: 'profile', component: UserDashboardComponent }, // Route to UserDashboardComponent
  { path: 'income', component: UserDashboardComponent },
  { path: 'deposit', component: UserDashboardComponent },
  { path: 'withdrawal', component: UserDashboardComponent },
  { path: 'support', component: UserDashboardComponent },
  { path: 'team', component: UserDashboardComponent },
  { path: 'daily-income', component: UserDashboardComponent },
  { path: 'direct-income', component: UserDashboardComponent },
  { path: 'binary-income', component: UserDashboardComponent },
  { path: 'credit-debit-history', component: UserDashboardComponent },
  { path: 'fund-request', component: UserDashboardComponent },
  { path: 'fund-transfer', component: UserDashboardComponent },
  { path: 'history', component: UserDashboardComponent },
  { path: 'id-topup', component: UserDashboardComponent },
  { path: 'used-fund-history', component: UserDashboardComponent },
  { path: 'my-topup-history', component: UserDashboardComponent },
  { path: 'daily-cashback-income', component: UserDashboardComponent },
  { path: 'working-income', component: UserDashboardComponent },
  { path: 'withdrawal-history', component: UserDashboardComponent },
  { path: '**', redirectTo: 'dashboard' } // Wildcard at the end
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }