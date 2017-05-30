import { Routes, RouterModule } from '@angular/router';

import { ListFieldComponent } from './list-field.component';
import { NewFieldComponent } from './new-field.component';
import { EditFieldComponent } from './edit-field.component';
import { ViewFieldComponent } from './view-field.component';

const fieldsRoutes: Routes = [
    { path: 'fields', component: ListFieldComponent, pathMatch: 'full' },
    { path: 'fields/new', component: NewFieldComponent },
    { path: 'fields/edit/:id', component: EditFieldComponent },
    { path: 'fields/:id', component: ViewFieldComponent }
];

export const fieldsRouting = RouterModule.forChild(fieldsRoutes);
