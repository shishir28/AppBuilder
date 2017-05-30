import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ListProjectComponent } from './list-project.component';
import { NewProjectComponent } from './new-project.component';
import { EditProjectComponent } from './edit-project.component';
import { ViewProjectComponent } from './view-project.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpModule
    ],
    declarations: [
        ListProjectComponent,
        NewProjectComponent,
        EditProjectComponent,
        ViewProjectComponent
    ],
    exports: [
        //ListProjectComponent
    ],
    providers: [
        //UsersService
    ]
})
export class ProjectsModule { }
