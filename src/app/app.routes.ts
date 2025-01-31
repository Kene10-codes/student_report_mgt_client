import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import  { SignupComponent } from './signup/signup.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {path: '', component: AppComponent },
    { path: 'login', component: LoginComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'signup', component: SignupComponent}
];
