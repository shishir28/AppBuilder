import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialComponentsModule } from '../shared/material-components.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AccountsService } from './shared/accounts.service';

import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { ForgotPasswordComponent } from './forgot-password.component';
import { ListUserComponent } from './list-user/list-user.component';
import { EditUserComponent } from './edit-user.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MaterialComponentsModule,
        RouterModule,
        HttpModule,
        FlexLayoutModule,
    ],

    declarations: [
        LoginComponent, RegisterComponent, ForgotPasswordComponent, ListUserComponent, EditUserComponent
    ],
    entryComponents: [
    ],
    providers: [
        AccountsService
    ]
})

export class AccountsModule { }
