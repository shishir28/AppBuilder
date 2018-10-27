import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { EditFormComponent } from './edit-form.component';
import { NewFormComponent } from './new-form.component';
import { FormsService } from './shared/forms.service';
import { ViewFormComponent } from './view-form.component';

export const formConfig: NgModule = {
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpModule,
        FlexLayoutModule,
    ],

    declarations: [
        NewFormComponent,
        EditFormComponent,
        ViewFormComponent
    ], 
    providers: [
        FormsService
    ]
}

