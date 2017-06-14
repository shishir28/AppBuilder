import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./main/home//home.component";
//import { LoginComponent } from "./demo/custom-pages/login/login.component";
// ---------Routes----------
import { mainRoutes } from './main/main-routing.module'
// -------------------
import { ListProjectComponent } from "./main/projects/list-project.component";
import { ViewProjectComponent } from "./main/projects/view-project.component";
import { EditProjectComponent } from "./main/projects/edit-project.component";
import { NewProjectComponent } from "./main/projects/new-project.component";
//-------------
const routes: Routes = [
    //{
    //    path: 'login',
    //    component: LoginComponent
    //},
    ////{
    //    path: 'register',
    //    component: RegisterComponent
    //},
    //{
    //    path: 'forgot-password',
    //    component: ForgotPasswordComponent
    //},
    {
        path: '',
        component: HomeComponent,
        children: [
            ...mainRoutes
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class RoutingModule { }
