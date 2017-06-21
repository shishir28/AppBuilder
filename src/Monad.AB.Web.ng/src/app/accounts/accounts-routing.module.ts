import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// ---------Routes--------------------------------------------------
import { LoginComponent} from './login.component';
import {RegisterComponent } from './register.component';
import { ForgotPasswordComponent} from './forgot-password.component';

// -----------------------------------------------------------------


export const accountsRoutes: Routes = [
    { path: 'login', component: LoginComponent, pathMatch: 'full' },
    { path: 'register', component: RegisterComponent, pathMatch: 'full' },
    { path: 'forgot-password', component: ForgotPasswordComponent, pathMatch: 'full' },
];

