﻿import { Routes } from '@angular/router';

import { EditProjectComponent } from './edit-project.component';
import { ListProjectComponent } from './list-project.component';
import { NewProjectComponent } from './new-project.component';
import { ViewProjectComponent } from './view-project.component';

export const projectsRoutes: Routes = [
  { path: 'projects', component: ListProjectComponent, pathMatch: 'full' },
  { path: 'projects/new', component: NewProjectComponent},
  { path: 'projects/edit/:projectid', component: EditProjectComponent},
  { path: 'projects/:projectid', component: ViewProjectComponent}
];

