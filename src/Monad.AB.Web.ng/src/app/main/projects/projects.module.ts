import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ListProjectComponent } from './list-project.component';
import { NewProjectComponent } from './new-project.component';
import { EditProjectComponent } from './edit-project.component';
import { ViewProjectComponent } from './view-project.component';
import { ProjectsService } from './shared/projects.service';

export const projectConfig: NgModule = {
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
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

