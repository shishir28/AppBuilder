import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EditFormFieldViewComponent } from './edit-formFieldView.component';
import { ViewFormFieldViewComponent } from './view-formFieldView.component';
import { FormFieldViewsService } from './shared/formFieldViews.service';

export const formFieldViewConfig: NgModule = {
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
        EditFormFieldViewComponent,
        ViewFormFieldViewComponent
    ],

    providers: [
        FormFieldViewsService
    ]
}

