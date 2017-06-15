import { Routes, RouterModule } from '@angular/router';
import { EditFormFieldViewComponent } from './edit-formFieldView.component';
import { ViewFormFieldViewComponent } from './view-formFieldView.component';

export const formFieldViewsRoutes: Routes = [
    { path: 'projects/:projectid/forms/:formid/fields/:formfieldid/formFieldViews/edit/:formFieldViewid', component: EditFormFieldViewComponent },
    { path: 'projects/:projectid/forms/:formid/fields/:formfieldid/formFieldViews/:formFieldViewid', component: ViewFormFieldViewComponent }
];
