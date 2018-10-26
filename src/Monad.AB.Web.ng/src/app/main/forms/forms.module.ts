import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NewFormComponent } from './new-form.component';
import { EditFormComponent } from './edit-form.component';
import { ViewFormComponent } from './view-form.component';
import { FormsService } from './shared/forms.service';

export const formConfig: NgModule = {
    imports: [
        CommonModule,
        FormsModule,
        // MaterialModule,
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

