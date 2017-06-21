import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// ---------Routes--------------------------------------------------
import { projectsRoutes } from './projects/projects.routing';
import { formsRoutes } from './forms/forms.routing';
import { formFieldsRoutes } from './formFields/formFields.routing';
import { formFieldViewsRoutes } from './formFieldViews/formFieldViews.routing';

// -----------------------------------------------------------------
import { IconsComponent } from './icons/icons.component';

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
