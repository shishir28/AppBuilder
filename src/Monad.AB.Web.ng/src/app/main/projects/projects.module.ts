import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';

import { EditProjectComponent } from './edit-project.component';
import { ListProjectComponent } from './list-project.component';
import { NewProjectComponent } from './new-project.component';
import { ProjectsService } from './shared/projects.service';
import { ViewProjectComponent } from './view-project.component';

export const projectConfig: NgModule = {
    imports: [
        CommonModule,
        FormsModule,
        MatInputModule,
        ReactiveFormsModule,
        RouterModule,
        HttpModule,
        FlexLayoutModule,
    ],

    declarations: [
        ListProjectComponent,
        NewProjectComponent,
        EditProjectComponent,
        ViewProjectComponent
    ],
    entryComponents: [
    ],
  
    providers: [
        ProjectsService
    ]
}

