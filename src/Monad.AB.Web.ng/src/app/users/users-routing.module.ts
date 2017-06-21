
import { Routes, RouterModule } from '@angular/router';

import { EditUserProfileComponent } from "./edit-user-profile.component";
import { ViewUserProfileComponent } from "./view-user-profile.component";

export const usersRoutes: Routes = [
    { path: 'user-profile/edit', component: EditUserProfileComponent },
    { path: 'user-profile/view', component: ViewUserProfileComponent },
];