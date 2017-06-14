import { Routes, RouterModule } from '@angular/router';
import { ListFormFieldComponent } from './list-formField.component';
import { NewFormFieldComponent } from './new-formField.component';
import { EditFormFieldComponent } from './edit-formField.component';
import { ViewFormFieldComponent } from './view-formField.component';

export const formFieldsRoutes: Routes = [
    { path: 'projects/:projectid/forms/:formid/fields', component: ListFormFieldComponent, pathMatch: 'full' },
    { path: 'projects/:projectid/forms/:formid/fields/new', component: NewFormFieldComponent },
    { path: 'projects/:projectid/forms/:formid/fields/edit/:fieldid', component: EditFormFieldComponent },
    { path: 'projects/:projectid/forms/:formid/fields/:fieldid', component: ViewFormFieldComponent }
];
