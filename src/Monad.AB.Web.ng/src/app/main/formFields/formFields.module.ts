import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ListFormFieldComponent } from './list-formField.component';
import { NewFormFieldComponent } from './new-formField.component';
import { EditFormFieldComponent } from './edit-formField.component';
import { ViewFormFieldComponent } from './view-formField.component';
import { FormFieldsService } from './shared/formFields.service';

export const formFieldConfig: NgModule = {
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
        ListFormFieldComponent,
        NewFormFieldComponent,
        EditFormFieldComponent,
        ViewFormFieldComponent
    ],

    providers: [
        FormFieldsService
    ]
}

