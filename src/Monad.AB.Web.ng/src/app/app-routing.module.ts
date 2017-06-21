import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./main/home/home.component";
import { LoginComponent } from "./account/login.component";
import { RegisterComponent } from "./account/register.component";
import { ForgotPasswordComponent } from "./account/forgot-password.component";
import { AuthGuard } from './shared/guards/index';
// ---------Routes----------
import { mainRoutes } from './main/main-routing.module';
import { accountRoutes } from './account/account-routing.module';
// -------------------
import { ListProjectComponent } from "./main/projects/list-project.component";
import { ViewProjectComponent } from "./main/projects/view-project.component";
import { EditProjectComponent } from "./main/projects/edit-project.component";
import { NewProjectComponent } from "./main/projects/new-project.component";
//-------------
const routes: Routes = [
    ...accountRoutes,
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard],
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
