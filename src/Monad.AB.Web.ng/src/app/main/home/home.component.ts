﻿import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MediaChange } from '@angular/flex-layout';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { MediaReplayService } from '../../widgets/sidenav/mediareplay/media-replay.service';

@Component({
    selector: 'ms-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class HomeComponent implements OnInit {

    @ViewChild('sidenav') sidenav;

    private _mediaSubscription: Subscription;
    private _routerEventsSubscription: Subscription;

    quickpanelOpen: boolean = false;
    sidenavOpen: boolean = true;
    sidenavMode: string = 'side';
    isMobile: boolean = false;

    constructor(
        private router: Router,
        private mediaReplayService: MediaReplayService
    ) { }

    ngOnInit() {
        this._mediaSubscription = this.mediaReplayService.media$.subscribe((change: MediaChange) => {
            let isMobile = (change.mqAlias == 'xs') || (change.mqAlias == 'sm');

            this.isMobile = isMobile;
            this.sidenavMode = (isMobile) ? 'over' : 'side';
            this.sidenavOpen = !isMobile;
        });

        this._routerEventsSubscription = this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd && this.isMobile) {
                this.sidenav.close();
            }
        });
    }

    ngOnDestroy() {
        this._mediaSubscription.unsubscribe();
    }

    onActivate(e, scrollContainer) {
        scrollContainer.scrollTop = 0;
    }
}
