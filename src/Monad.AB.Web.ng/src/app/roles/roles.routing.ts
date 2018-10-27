import { Routes } from '@angular/router';

import { EditRoleComponent } from './edit-role.component';
import { ListRoleComponent } from './list-role.component';
import { NewRoleComponent } from './new-role.component';
import { ViewRoleComponent } from './view-role.component';

export const rolesRoutes: Routes = [
    { path: 'roles', component: ListRoleComponent },
    { path: 'roles/new', component: NewRoleComponent },
    { path: 'roles/:roleid', component: ViewRoleComponent },
    { path: 'roles/edit/:roleid', component: EditRoleComponent }
];
