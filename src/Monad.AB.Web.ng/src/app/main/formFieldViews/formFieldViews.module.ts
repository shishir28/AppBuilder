import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { EditFormFieldViewComponent } from './edit-formFieldView.component';
import { FormFieldViewsService } from './shared/formFieldViews.service';

export const formFieldViewConfig: NgModule = {
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpModule,
        FlexLayoutModule,
    ],
    declarations: [
        EditFormFieldViewComponent
    ],

    providers: [
        FormFieldViewsService
    ]
}

