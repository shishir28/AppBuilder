﻿import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidenavComponent } from '../core/sidenav/sidenav.component';
import { SidenavItemComponent } from '../core/sidenav/sidenav-item/sidenav-item.component';
import { IconSidenavDirective } from '../core/sidenav/icon-sidenav.directive';
import { SearchComponent } from '../core/toolbar/search/search.component';
import { BreadcrumbsComponent } from '../core/breadcrumb/breadcrumb.component';
import { IconsComponent } from './icons/icons.component';
import { ToolbarComponent } from '../core/toolbar/toolbar.component';
import { ToolbarUserButtonComponent } from '../core/toolbar/toolbar-user-button/toolbar-user-button.component';
import { ClickOutsideDirective } from '../core/utils/click-outside.directive';
import { SearchBarComponent } from '../core/toolbar/search-bar/search-bar.component';
import { ToolbarNotificationsComponent } from '../core/toolbar/toolbar-notifications/toolbar-notifications.component';
import { SidenavService } from '../core/sidenav/sidenav.service';
import { MediaReplayService } from '../core/sidenav/mediareplay/media-replay.service';
import { BreadcrumbService } from '../core/breadcrumb/breadcrumb.service';
import { MaterialComponentsModule } from '../material/material-components.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { projectConfig } from './projects/projects.module'
import { formConfig } from './forms/forms.module';
import { formFieldConfig } from './formFields/formFields.module';
import { formFieldViewConfig } from './formFieldViews/formFieldViews.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MaterialComponentsModule,
        FlexLayoutModule,
        FormsModule,
        PerfectScrollbarModule.forChild(),
        ...projectConfig.imports,
        ...formConfig.imports,
        ...formFieldConfig.imports,
        ...formFieldViewConfig.imports
    ],

    declarations: [
        SidenavComponent,
        SidenavItemComponent,
        IconSidenavDirective,
        SearchComponent,
        BreadcrumbsComponent,
        ToolbarComponent,
        ToolbarUserButtonComponent,
        ClickOutsideDirective,
        SearchBarComponent,
        IconsComponent,
        ToolbarNotificationsComponent,
        HomeComponent,
        ...projectConfig.declarations,
        ...formConfig.declarations,
        ...formFieldConfig.declarations,
        ...formFieldViewConfig.declarations


    ],
    entryComponents: [
        ...projectConfig.entryComponents
    ],
    providers: [
        SidenavService,
        MediaReplayService,
        BreadcrumbService,
        ...projectConfig.providers,
        ...formConfig.providers,
        ...formFieldConfig.providers,
        ...formFieldViewConfig.providers

    ]
})
export class MainModule { }