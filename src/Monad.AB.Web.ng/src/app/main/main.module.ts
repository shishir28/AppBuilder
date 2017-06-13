import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidenavComponent } from '../core/sidenav/sidenav.component';
import { SidenavItemComponent } from '../core/sidenav/sidenav-item/sidenav-item.component';
import { IconSidenavDirective } from '../core/sidenav/icon-sidenav.directive';
import { SearchComponent } from '../core/toolbar/search/search.component';
import { BreadcrumbsComponent } from '../core/breadcrumb/breadcrumb.component';

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
//import { LoginComponent } from './custom-pages/login/login.component';
import { HomeComponent } from './home/home.component';
import { projectConfig } from './projects/projects.module'
import { projectsRouting } from './projects/projects.routing';
@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MaterialComponentsModule,
        FlexLayoutModule,
        FormsModule,
        PerfectScrollbarModule.forChild(),
        ...projectConfig.imports
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
        ToolbarNotificationsComponent,
        HomeComponent,
        ...projectConfig.declarations
    ],
    entryComponents: [
        ...projectConfig.entryComponents
    ],
    providers: [
        SidenavService,
        MediaReplayService,
        BreadcrumbService,
        ...projectConfig.providers
    ]
})
export class MainModule { }
