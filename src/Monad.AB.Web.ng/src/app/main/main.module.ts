import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetComponent } from '../core/widgets/widgets-v1/widget-v1/widget-v1.component';
import { LineChartWidgetComponent } from '../core/widgets/widgets-v1/line-chart-widget/line-chart-widget.component';
import { SourceOverviewWidgetComponent } from '../core/widgets/widgets-v1/source-overview-widget/source-overview-widget.component';

import { nvD3 } from '../core/charts/nvD3/nvD3.component';
//import { LoginComponent } from './custom-pages/login/login.component';
import { BarChartComponent } from '../core/widgets/bar-chart/bar-chart.component';
import { PieChartComponent } from '../core/widgets/pie-chart/pie-chart.component';
import { GoogleMapsWidgetComponent } from '../core/widgets/google-maps-widget/google-maps-widget.component';
import { ActivityComponent } from '../core/widgets/activity/activity.component';
import { TrafficSourcesComponent } from '../core/widgets/traffic-sources/traffic-sources.component';
import { LoadingOverlayComponent } from '../core/loading-overlay/loading-overlay.component';
import { environment } from "../../environments/environment";
import { SortablejsModule, SortablejsOptions } from 'angular-sortablejs';
import { D3ChartService } from '../core/charts/nvD3/nvD3.service';
import { CalendarModule } from 'angular-calendar';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RoutingModule } from '../app-routing.module';
import { MaterialComponentsModule } from '../material/material-components.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AgmCoreModule } from '@agm/core';
import { HighlightModule } from '../core/highlightjs/highlight.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { QuillModule } from 'ngx-quill';

import { ProjectsModule } from './projects/projects.module'
import { projectsRouting } from './projects/projects.routing';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        FormsModule,
        HttpModule,
        RoutingModule,
        MaterialComponentsModule,
        FlexLayoutModule,
        AgmCoreModule.forRoot({
            apiKey: environment.googleApi
        }),
        QuillModule,
        HighlightModule,
        SortablejsModule,
        ProjectsModule,
        CalendarModule.forRoot(),
        PerfectScrollbarModule.forChild(),
    ],
   
    declarations: [
        WidgetComponent,
        SourceOverviewWidgetComponent,
        nvD3,
        //LoginComponent,
        BarChartComponent,
        PieChartComponent,
        GoogleMapsWidgetComponent,
        ActivityComponent,
        TrafficSourcesComponent,
        LoadingOverlayComponent,
    ],
    providers: [
        D3ChartService
    ]
})
export class MainModule { }
