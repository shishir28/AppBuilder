import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./main/home/home.component";
import { NotFoundComponent } from "./shared/not-found.component";
import { AccessDeniedComponent } from "./shared/access-denied.component";
import { InternalServerErrorComponent } from './shared/internal-server-error.component';

import { ForgotPasswordComponent } from "./accounts/forgot-password.component";
import { AuthGuard } from './shared/guards/index';
// ---------Routes----------
import { mainRoutes } from './main/main-routing.module';
import { accountsRoutes } from './accounts/accounts-routing.module';
import { userProfilesRoutes } from './userProfiles/userProfiles.routing';
import { rolesRoutes } from './roles/roles.routing';
import { userManagementRoutes } from './accounts/accounts-routing.module';

//-------------
const routes: Routes = [
    ...accountsRoutes,
   
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard],
        children: [
            ...mainRoutes,
            ...userProfilesRoutes,
            ...rolesRoutes,
            ...userManagementRoutes,
        ]
    },
    { path: 'notFound', component: NotFoundComponent },
    { path: 'accessDenied', component: AccessDeniedComponent },
    { path: 'internalServerError', component: InternalServerErrorComponent }
    //{ path: '**', redirectTo: '/notFound' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class RoutingModule { }
