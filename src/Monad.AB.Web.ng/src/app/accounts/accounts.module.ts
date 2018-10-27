import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';

import { MaterialComponentsModule } from '../shared/material-components.module';
import { SharedComponentsModule } from '../shared/shared-components.module';
import { EditUserComponent } from './edit-user.component';
import { ForgotPasswordComponent } from './forgot-password.component';
import { ListUserComponent } from './list-user.component';
import { LoginComponent } from './login.component';
import { NewUserComponent } from './new-user.component';
import { RegisterComponent } from './register.component';
import { AccountsService } from './shared/accounts.service';
import { ViewUserComponent } from './view-user.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MatInputModule,
        ReactiveFormsModule,
        MaterialComponentsModule,
        SharedComponentsModule,
        RouterModule,
        HttpModule,
        FlexLayoutModule,
    ],

    declarations: [
        LoginComponent, RegisterComponent, ForgotPasswordComponent, ListUserComponent, EditUserComponent, NewUserComponent, ViewUserComponent
    ],
    entryComponents: [
    ],
    providers: [
        AccountsService
    ]
})

export class AccountsModule { }
