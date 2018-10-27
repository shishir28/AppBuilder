import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Http, RequestOptions, XHRBackend } from '@angular/http';
import { MatDialogModule, MatIconRegistry } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SortablejsModule, SortablejsOptions } from 'angular-sortablejs';
import { PerfectScrollbarConfigInterface, PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { AccountsModule } from './accounts/accounts.module';
import { RoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import { RolesModule } from './roles/roles.module';
import { AccessDeniedComponent } from './shared/access-denied.component';
import { AuthGuard } from './shared/guards';
import { httpFactory } from './shared/httpFactory';
import { InternalServerErrorComponent } from './shared/internal-server-error.component';
import { MaterialComponentsModule } from './shared/material-components.module';
import { NotFoundComponent } from './shared/not-found.component';
import { SharedComponentsModule } from './shared/shared-components.module';
import { UserProfilesModule } from './userProfiles/userProfiles.module';

const perfectScrollbarConfig: PerfectScrollbarConfigInterface = {
    suppressScrollX: true,
    // swipePropagation: false
};

const sortablejsConfig: SortablejsOptions = {
    animation: 300
};

@NgModule({
    declarations: [AppComponent, NotFoundComponent, AccessDeniedComponent, InternalServerErrorComponent],
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        MatDialogModule,       
        RoutingModule,
        BrowserAnimationsModule,
        MainModule,
        AccountsModule,
        UserProfilesModule,
        RolesModule,
        SortablejsModule,
        MaterialComponentsModule,
        SharedComponentsModule,
        FlexLayoutModule,        
        PerfectScrollbarModule,
    ],
    providers: [
        MatIconRegistry, AuthGuard,
        {
            provide: Http,
            useFactory: httpFactory,
            deps: [XHRBackend, RequestOptions]
          },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
