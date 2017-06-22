import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialComponentsModule } from '../material/material-components.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UsersService } from './shared/users.service';

import { EditUserProfileComponent } from "./edit-user-profile.component";
import { ViewUserProfileComponent } from "./view-user-profile.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialComponentsModule,
        RouterModule,
        HttpModule,
        FlexLayoutModule,
    ],

    declarations: [
        EditUserProfileComponent, ViewUserProfileComponent
    ],
    entryComponents: [
    ],
    providers: [
        UsersService
    ]
})

export class UsersModule { }
