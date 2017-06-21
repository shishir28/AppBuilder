import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AuthGuard } from './shared/guards/index';

import { AppComponent } from './app.component';
import { MdIconRegistry, } from "@angular/material";
import { RoutingModule } from "./app-routing.module";
import { CommonModule } from "@angular/common";
import { PerfectScrollbarConfigInterface, PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MainModule } from './main/main.module';
import { AccountModule } from './account/account.module';
import { SortablejsModule, SortablejsOptions } from 'angular-sortablejs';

const perfectScrollbarConfig: PerfectScrollbarConfigInterface = {
    suppressScrollX: true,
    swipePropagation: false
};

const sortablejsConfig: SortablejsOptions = {
    animation: 300
};

@NgModule({
    declarations: [AppComponent],
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RoutingModule,
        BrowserAnimationsModule,
        MainModule,
        AccountModule,
        SortablejsModule,
        PerfectScrollbarModule.forRoot(perfectScrollbarConfig),
    ],
    providers: [
        MdIconRegistry, AuthGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }