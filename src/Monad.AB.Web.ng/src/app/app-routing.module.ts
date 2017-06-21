import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./main/home/home.component";
import { NotFoundComponent } from "./shared/not-found.component";

import { ForgotPasswordComponent } from "./accounts/forgot-password.component";
import { AuthGuard } from './shared/guards/index';
// ---------Routes----------
import { mainRoutes } from './main/main-routing.module';
import { accountsRoutes } from './accounts/accounts-routing.module';
import { usersRoutes } from './users/users-routing.module';

// -------------------

//-------------
const routes: Routes = [
    ...accountsRoutes,
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard],
        children: [
            ...mainRoutes,
            ...usersRoutes
        ]
    },
    { path: '404', component: NotFoundComponent },
    { path: '**', redirectTo: '/404' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class RoutingModule { }
