import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { NavigationEnd, Router } from '@angular/router';
import * as _ from 'lodash';
import { Subscription } from 'rxjs';

import { BreadcrumbService } from '../breadcrumb/breadcrumb.service';
import { SidenavItem } from './sidenav-item/sidenav-item.model';
import { SidenavService } from './sidenav.service';

@Component({
    selector: 'ms-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class SidenavComponent implements OnInit, OnDestroy {

    items: SidenavItem[];

    private _itemsSubscription: Subscription;
    private _routerEventsSubscription: Subscription;

    constructor(
        private sidenavService: SidenavService,
        private router: Router,
        private breadcrumbService: BreadcrumbService,
        private snackBar: MatSnackBar
    ) { }

    ngOnInit() {
        this.sidenavService.buildMenu(sessionStorage.getItem('currentUser'));
        this._itemsSubscription = this.sidenavService.items$
            .subscribe((items: SidenavItem[]) => {
                this.items = this.sortRecursive(items, 'position');
            });

        this._routerEventsSubscription = this.router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.sidenavService.nextCurrentlyOpenByRoute(event.url);
                setTimeout(() => {
                    window.dispatchEvent(new Event('resize'));
                }, 400);
            }
        });
        this.breadcrumbService.addFriendlyNameForRoute('/projects', "Projects");
    }

    toggleIconSidenav() {
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 300);

        this.sidenavService.isIconSidenav = !this.sidenavService.isIconSidenav;

        let snackBarConfig: MatSnackBarConfig = <MatSnackBarConfig>{
            duration: 10000
        };

        if (this.sidenavService.isIconSidenav) {
            this.snackBar.open('You activated Icon-Sidenav, move your mouse to the content and see what happens!', '', snackBarConfig);
        }
    }

    isIconSidenav(): boolean {
        return this.sidenavService.isIconSidenav;
    }

    sortRecursive(array: SidenavItem[], propertyName: string) {
        let that = this;
        array.forEach(function (item) {
            let keys = _.keys(item);
            keys.forEach(function (key) {
                if (_.isArray(item[key])) {
                    item[key] = that.sortRecursive(item[key], propertyName);
                }
            });
        });
        return _.sortBy(array, propertyName);
    };

    ngOnDestroy() {
        this._itemsSubscription.unsubscribe();
        this._routerEventsSubscription.unsubscribe();
    }
}
