import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { MaterialComponentsModule } from '../shared/material-components.module';
import { SharedComponentsModule } from '../shared/shared-components.module';
import { EditRoleComponent } from './edit-role.component';
import { ListRoleComponent } from './list-role.component';
import { NewRoleComponent } from './new-role.component';
import { RolesService } from './shared/roles.service';
import { ViewRoleComponent } from './view-role.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialComponentsModule,
        SharedComponentsModule,
        RouterModule,
        HttpModule,
        FlexLayoutModule,
    ],

    declarations: [
        ListRoleComponent, EditRoleComponent, NewRoleComponent, ViewRoleComponent
    ],
   
    entryComponents: [
    ],
    providers: [
        RolesService
    ]
})

export class RolesModule { }
