import { Routes } from '@angular/router';

import { EditUserComponent } from './edit-user.component';
import { ForgotPasswordComponent } from './forgot-password.component';
import { ListUserComponent } from './list-user.component';
import { LoginComponent } from './login.component';
import { NewUserComponent } from './new-user.component';
import { RegisterComponent } from './register.component';
import { ViewUserComponent } from './view-user.component';

// ---------Routes--------------------------------------------------

export const accountsRoutes: Routes = [
    { path: 'login', component: LoginComponent, pathMatch: 'full' },
    { path: 'register', component: RegisterComponent, pathMatch: 'full' },
    { path: 'forgot-password', component: ForgotPasswordComponent, pathMatch: 'full' },
];

export const userManagementRoutes: Routes = [
    { path: 'users', component: ListUserComponent, pathMatch: 'full' },
    { path: 'users/new', component: NewUserComponent, pathMatch: 'full' },
    { path: 'users/:userId', component: ViewUserComponent, pathMatch: 'full' },
    { path: 'users/edit/:userId', component: EditUserComponent, pathMatch: 'full' },
];