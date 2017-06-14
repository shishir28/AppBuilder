import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// ---------Routes----------
import { projectsRoutes } from './projects/projects.routing';
import { formsRoutes } from './forms/forms.routing';

// -------------------
//-------------

export const mainRoutes: Routes = [
    {
        path: '',
        redirectTo: '/projects',
        pathMatch: 'full'
    },
    ...projectsRoutes,
    ...formsRoutes
];
