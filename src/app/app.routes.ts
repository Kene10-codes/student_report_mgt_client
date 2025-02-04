import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import  { SignupComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuard } from './services/auth/auth.guard';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'signup', component: SignupComponent},
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }
];
