import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialComponentsModule } from '../material/material-components.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AccountService } from './shared/account.service';

import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { ForgotPasswordComponent } from './forgot-password.component';


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
        LoginComponent, RegisterComponent, ForgotPasswordComponent
    ],
    entryComponents: [
    ],
    providers: [
        AccountService
    ]
})

export class AccountModule { }
