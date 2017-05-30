import { Routes, RouterModule } from '@angular/router';

import {ListProjectComponent} from "./list-project.component";
import {EditProjectComponent} from "./edit-project.component";
import {NewProjectComponent} from "./new-project.component";
import {ViewProjectComponent} from "./view-project.component";

const projectsRoutes: Routes = [
  { path: 'projects', component: ListProjectComponent, pathMatch: 'full' },
  { path: 'projects/new', component: NewProjectComponent},
  { path: 'projects/edit/:id', component: EditProjectComponent},
  { path: 'projects/:id', component: ViewProjectComponent}
];

export const projectsRouting = RouterModule.forChild(projectsRoutes);
