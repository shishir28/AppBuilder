import { Routes } from '@angular/router';

import { IconsComponent } from '../widgets/icons/icons.component';
import { formFieldsRoutes } from './formFields/formFields.routing';
import { formFieldViewsRoutes } from './formFieldViews/formFieldViews.routing';
import { formsRoutes } from './forms/forms.routing';
import { projectsRoutes } from './projects/projects.routing';

export const mainRoutes: Routes = [
    {
        path: '',
        redirectTo: '/projects',
        pathMatch: 'full'
    },
    {
        path: 'icons',
        component: IconsComponent
    },
    ...projectsRoutes,
    ...formsRoutes,
    ...formFieldsRoutes,
    ...formFieldViewsRoutes
];
