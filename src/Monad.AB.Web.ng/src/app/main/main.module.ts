import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { MaterialComponentsModule } from '../shared/material-components.module';
import { SharedComponentsModule } from '../shared/shared-components.module';
import { BreadcrumbsComponent } from '../widgets/breadcrumb/breadcrumb.component';
import { BreadcrumbService } from '../widgets/breadcrumb/breadcrumb.service';
import { DialogModule } from '../widgets/dialogs/dialog.module';
import { IconsComponent } from '../widgets/icons/icons.component';
import { IconSidenavDirective } from '../widgets/sidenav/icon-sidenav.directive';
import { MediaReplayService } from '../widgets/sidenav/mediareplay/media-replay.service';
import { SidenavItemComponent } from '../widgets/sidenav/sidenav-item/sidenav-item.component';
import { SidenavComponent } from '../widgets/sidenav/sidenav.component';
import { SidenavService } from '../widgets/sidenav/sidenav.service';
import { ToolbarUserButtonComponent } from '../widgets/toolbar/toolbar-user-button/toolbar-user-button.component';
import { ToolbarComponent } from '../widgets/toolbar/toolbar.component';
import { ClickOutsideDirective } from '../widgets/utils/click-outside.directive';
import { formFieldConfig } from './formFields/formFields.module';
import { formFieldViewConfig } from './formFieldViews/formFieldViews.module';
import { formConfig } from './forms/forms.module';
import { HomeComponent } from './home/home.component';
import { projectConfig } from './projects/projects.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MatListModule,
        MaterialComponentsModule,
        SharedComponentsModule,
        FlexLayoutModule,
        FormsModule,
        DialogModule,
        MatDialogModule,
        PerfectScrollbarModule,
        ...projectConfig.imports,
        ...formConfig.imports,
        ...formFieldConfig.imports,
        ...formFieldViewConfig.imports
    ],

    declarations: [        
        SidenavComponent,
        SidenavItemComponent,
        IconSidenavDirective,
        BreadcrumbsComponent,
        ToolbarComponent,
        ToolbarUserButtonComponent,
        ClickOutsideDirective,
        IconsComponent,
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
