import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { EditFormFieldComponent } from './edit-formField.component';
import { NewFormFieldComponent } from './new-formField.component';
import { FormFieldsService } from './shared/formFields.service';
import { ViewFormFieldComponent } from './view-formField.component';

export const formFieldConfig: NgModule = {
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpModule,
        FlexLayoutModule,
    ],
    declarations: [
        NewFormFieldComponent,
        EditFormFieldComponent,
        ViewFormFieldComponent
    ],

    providers: [
        FormFieldsService
    ]
}

