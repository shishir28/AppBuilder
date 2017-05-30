import { Routes, RouterModule } from '@angular/router';

import {ListFormComponent} from "./list-form.component";
import {EditFormComponent} from "./edit-form.component";
import {NewFormComponent} from "./new-form.component";
import {ViewFormComponent} from "./view-form.component";

const formsRoutes: Routes = [
    { path: 'forms', component: ListFormComponent, pathMatch: 'full' },
    { path: 'forms/new', component: NewFormComponent},
    { path: 'forms/edit/:id', component: EditFormComponent},
    { path: 'forms/:id', component: ViewFormComponent}
];

export const formsRouting = RouterModule.forChild(formsRoutes);
