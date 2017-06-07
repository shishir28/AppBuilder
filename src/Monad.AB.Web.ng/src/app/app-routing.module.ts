import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { ListProjectComponent } from "./projects/list-project.component";
import { ViewProjectComponent } from "./projects/view-project.component";
import { EditProjectComponent } from "./projects/edit-project.component";
import { NewProjectComponent } from "./projects/new-project.component";

import { AuthGuard } from './shared/guards/index';



const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'forgot-password',
        component: ForgotPasswordComponent
    },
    {
        path: '',
        component: HomeComponent,// canActivate: [AuthGuard],
        children: [
            {
                path: '',
                redirectTo: 'projects',
                pathMatch: 'full'
            },
            {
                path: 'projects',
                component: ListProjectComponent
            },
            {
                path: 'projects/new',
                component: NewProjectComponent
            },

            {
                path: 'projects/:id',
                component: ViewProjectComponent
            },
            {
                path: 'projects/edit/:id',
                component: EditProjectComponent
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class RoutingModule { }
