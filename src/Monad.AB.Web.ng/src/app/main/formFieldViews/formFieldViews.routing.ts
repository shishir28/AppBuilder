import { Routes } from '@angular/router';

import { EditFormFieldViewComponent } from './edit-formFieldView.component';

export const formFieldViewsRoutes: Routes = [
    { path: 'projects/:projectid/forms/:formid/fields/:formfieldid/formFieldViews/edit/:formFieldViewid', component: EditFormFieldViewComponent }
];
