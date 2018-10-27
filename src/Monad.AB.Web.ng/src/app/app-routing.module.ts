import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { accountsRoutes, userManagementRoutes } from './accounts/accounts-routing.module';
import { HomeComponent } from './main/home/home.component';
import { mainRoutes } from './main/main-routing.module';
import { rolesRoutes } from './roles/roles.routing';
import { AccessDeniedComponent } from './shared/access-denied.component';
import { AuthGuard } from './shared/guards';
import { InternalServerErrorComponent } from './shared/internal-server-error.component';
import { NotFoundComponent } from './shared/not-found.component';
import { userProfilesRoutes } from './userProfiles/userProfiles.routing';

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
