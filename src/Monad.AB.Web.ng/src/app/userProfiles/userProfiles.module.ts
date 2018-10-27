import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { MaterialComponentsModule } from '../shared/material-components.module';
import { EditUserProfileComponent } from './edit-user-profile.component';
import { UsersService } from './shared/users.service';
import { ViewUserProfileComponent } from './view-user-profile.component';

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

export class UserProfilesModule { }
