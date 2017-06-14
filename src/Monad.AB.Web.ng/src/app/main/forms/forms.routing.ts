import { Routes, RouterModule } from '@angular/router';

import {EditFormComponent} from "./edit-form.component";
import {NewFormComponent} from "./new-form.component";
import {ViewFormComponent} from "./view-form.component";

export const formsRoutes: Routes = [
    { path: 'projects/:projectid/forms/new', component: NewFormComponent},
    { path: 'projects/:projectid/forms/edit/:formid', component: EditFormComponent},
    { path: 'projects/:projectid/forms/:formid', component: ViewFormComponent}
];