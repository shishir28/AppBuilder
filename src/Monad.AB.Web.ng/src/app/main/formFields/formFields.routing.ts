import { Routes, RouterModule } from '@angular/router';
import { NewFormFieldComponent } from './new-formField.component';
import { EditFormFieldComponent } from './edit-formField.component';
import { ViewFormFieldComponent } from './view-formField.component';

export const formFieldsRoutes: Routes = [
    { path: 'projects/:projectid/forms/:formid/fields/new', component: NewFormFieldComponent },
    { path: 'projects/:projectid/forms/:formid/fields/edit/:formfieldid', component: EditFormFieldComponent },
    { path: 'projects/:projectid/forms/:formid/fields/:formfieldid', component: ViewFormFieldComponent }
];
