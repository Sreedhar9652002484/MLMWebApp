import { NgModule } from '@angular/core'; // Required for defining Angular modules
import { BrowserModule } from '@angular/platform-browser'; // Required for running Angular in the browser
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Required for two-way data binding and form handling
import { HttpClientModule } from '@angular/common/http'; // Required for making HTTP requests
import { CommonModule } from '@angular/common'; // Provides common directives like *ngIf, *ngFor

import { AppComponent } from './app.component'; // Root component
import { LandingComponent } from './Pages/landingpage/landingpage.component';
import { LoginComponent } from './Pages/login/login.component';
import { UserDashboardComponent } from './Modules/userdashboard/userdashboard.component';
import { AppRoutingModule } from './app.routes'; // Routing module
import { AuthService } from './Services/services/auth.service'; // Authentication service
import { PlanComponent } from './Modules/submenus/paln/paln.component';
import { ProfileComponent } from './Modules/submenus/profile/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    UserDashboardComponent,
    PlanComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }