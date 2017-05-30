import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ListFieldComponent } from './list-field.component';
import { NewFieldComponent } from './new-field.component';
import { EditFieldComponent } from './edit-field.component';
import { ViewFieldComponent } from './view-field.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpModule
    ],
    declarations: [
        ListFieldComponent,
        NewFieldComponent,
        EditFieldComponent,
        ViewFieldComponent
    ],
    exports: [
        //ListProjectComponent
    ],
    providers: [
        //UsersService
    ]
})
export class FieldsModule { }
