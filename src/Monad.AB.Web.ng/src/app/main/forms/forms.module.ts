import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ListFormComponent } from './list-form.component';
import { NewFormComponent } from './new-form.component';
import { EditFormComponent } from './edit-form.component';
import { ViewFormComponent } from './view-form.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpModule
    ],
    declarations: [
        ListFormComponent,
        NewFormComponent,
        EditFormComponent,
        ViewFormComponent
    ],
    exports: [
        //ListFormComponent
    ],
    providers: [
        //UsersService
    ]
})
export class AppFormsModule { }
