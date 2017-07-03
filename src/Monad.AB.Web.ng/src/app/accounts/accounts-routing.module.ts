import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// ---------Routes--------------------------------------------------
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { ForgotPasswordComponent } from './forgot-password.component';
import { ListUserComponent } from './list-user.component';
import { NewUserComponent } from './new-user.component';
import { EditUserComponent } from './edit-user.component';
// -----------------------------------------------------------------

export const accountsRoutes: Routes = [
    { path: 'login', component: LoginComponent, pathMatch: 'full' },
    { path: 'register', component: RegisterComponent, pathMatch: 'full' },
    { path: 'forgot-password', component: ForgotPasswordComponent, pathMatch: 'full' },
];

export const userManagementRoutes: Routes = [
    { path: 'users', component: ListUserComponent, pathMatch: 'full' },
    { path: 'users/new', component: NewUserComponent, pathMatch: 'full' },
    { path: 'users/edit/:userId', component: EditUserComponent, pathMatch: 'full' },
];