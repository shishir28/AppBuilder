import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatListModule} from '@angular/material/list';
import { SidenavComponent } from '../widgets/sidenav/sidenav.component';
import { SidenavItemComponent } from '../widgets/sidenav/sidenav-item/sidenav-item.component';
import { IconSidenavDirective } from '../widgets/sidenav/icon-sidenav.directive';
import { BreadcrumbsComponent } from '../widgets/breadcrumb/breadcrumb.component';
import { IconsComponent } from '../widgets/icons/icons.component';
import { ToolbarComponent } from '../widgets/toolbar/toolbar.component';
import { ToolbarUserButtonComponent } from '../widgets/toolbar/toolbar-user-button/toolbar-user-button.component';
import { ClickOutsideDirective } from '../widgets/utils/click-outside.directive';
import { SidenavService } from '../widgets/sidenav/sidenav.service';
import { MediaReplayService } from '../widgets/sidenav/mediareplay/media-replay.service';
import { BreadcrumbService } from '../widgets/breadcrumb/breadcrumb.service';
import { MaterialComponentsModule } from '../shared/material-components.module';
import { SharedComponentsModule } from '../shared/shared-components.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { DialogModule } from '../widgets/dialogs/dialog.module';
import { HomeComponent } from './home/home.component';
import { projectConfig } from './projects/projects.module'
import { formConfig } from './forms/forms.module';
import { formFieldConfig } from './formFields/formFields.module';
import { formFieldViewConfig } from './formFieldViews/formFieldViews.module';
import { MatDialogModule } from '@angular/material';

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
