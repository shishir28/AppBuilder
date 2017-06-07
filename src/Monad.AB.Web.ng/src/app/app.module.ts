import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MdIconRegistry, } from "@angular/material";
import { RoutingModule } from "./app-routing.module";
import { CommonModule } from "@angular/common";
import { PerfectScrollbarConfigInterface, PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CoreModule } from './core/core.module';
import { SortablejsModule, SortablejsOptions } from 'angular-sortablejs';
import { projectsRouting } from "./projects/projects.routing";
import { ProjectsModule } from "./projects/projects.module";
//import { ProjectsService } from "./projects/shared/projects.service";
import { formsRouting } from "./forms/forms.routing";
import { AppFormsModule } from "./forms/forms.module";
import { fieldsRouting } from "./fields/fields.routing";
import { FieldsModule } from "./fields/fields.module";
import { HighlightModule } from "./core/highlightjs/highlight.module";
import { BreadcrumbService } from "./core/breadcrumb/breadcrumb.service";
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AuthGuard } from './shared/guards/index';

const perfectScrollbarConfig: PerfectScrollbarConfigInterface = {
    suppressScrollX: true,
    swipePropagation: false
};

const sortablejsConfig: SortablejsOptions = {
    animation: 300
};


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        ForgotPasswordComponent
       
    ],
    entryComponents: [
       
    ],
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RoutingModule,
        BrowserAnimationsModule,
        CoreModule,
        projectsRouting, ProjectsModule,
        formsRouting, AppFormsModule,
        fieldsRouting, FieldsModule,
        PerfectScrollbarModule.forRoot(perfectScrollbarConfig),
        HighlightModule,
        SortablejsModule
    ],    
    providers: [
        MdIconRegistry,
        BreadcrumbService,
        AuthGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
