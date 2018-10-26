import { Injectable } from '@angular/core';
import { SidenavItem } from "./sidenav-item/sidenav-item.model";
import { BehaviorSubject, Observable } from "rxjs";
import * as _ from 'lodash';
import { MatSnackBar, MatSnackBarConfig } from "@angular/material";
import { Http, URLSearchParams, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class SidenavService {

    private _itemsSubject: BehaviorSubject<SidenavItem[]> = new BehaviorSubject<SidenavItem[]>([]);
    private _items: SidenavItem[] = [];
    items$: Observable<SidenavItem[]> = this._itemsSubject.asObservable();

    private _currentlyOpenSubject: BehaviorSubject<SidenavItem[]> = new BehaviorSubject<SidenavItem[]>([]);
    private _currentlyOpen: SidenavItem[] = [];
    currentlyOpen$: Observable<SidenavItem[]> = this._currentlyOpenSubject.asObservable();

    isIconSidenav: boolean;
    options: RequestOptions;

    constructor(private http: Http, private snackbar: MatSnackBar) {
    }

    public buildMenu(userName) {
        this.buildProjectMenu(userName);
    }

    private buildProjectMenu(userName) {
        let menu = this;
        let projects = menu.addItem('Projects', 'insert_comment', null, 4);
        let result: Observable<any[]>;
        let params = new URLSearchParams();
        params.set('userName', userName);
        let options = new RequestOptions({
            search: params
        });
        this.http.get('api/project/GetProjects', options)
            .subscribe(response => {
                let projectList = response.json();
                for (var idx = 0; idx < projectList.length; idx++) {
                    var project = projectList[idx];
                    menu.addSubItem(projects, project.name, '/projects/' + project.id, 3);
                }
            });
    }

    addItem(name: string, icon: string, route: any, position: number, badge?: string, badgeColor?: string, customClass?: string) {
        let item = new SidenavItem({
            name: name,
            icon: icon,
            route: route,
            subItems: [],
            position: position || 99,
            badge: badge || null,
            badgeColor: badgeColor || null,
            customClass: customClass || null
        });

        this._items.push(item);
        this._itemsSubject.next(this._items);

        return item;
    }

    addSubItem(parent: SidenavItem, name: string, route: any, position: number) {
        let item = new SidenavItem({
            name: name,
            route: route,
            parent: parent,
            subItems: [],
            position: position || 99
        });

        parent.subItems.push(item);
        this._itemsSubject.next(this._items);

        return item;
    }

    removeItem(item: SidenavItem) {
        let index = this._items.indexOf(item);
        if (index > -1) {
            this._items.splice(index, 1);
        }

        this._itemsSubject.next(this._items);
    }

    isOpen(item: SidenavItem) {
        return (this._currentlyOpen.indexOf(item) != -1);
    }

    toggleCurrentlyOpen(item: SidenavItem) {
        let currentlyOpen = this._currentlyOpen;

        if (this.isOpen(item)) {
            if (currentlyOpen.length > 1) {
                currentlyOpen.length = this._currentlyOpen.indexOf(item);
            } else {
                currentlyOpen = [];
            }
        } else {
            currentlyOpen = this.getAllParents(item);
        }

        this._currentlyOpen = currentlyOpen;
        this._currentlyOpenSubject.next(currentlyOpen);
    }

    getAllParents(item: SidenavItem, currentlyOpen: SidenavItem[] = []) {
        currentlyOpen.unshift(item);

        if (item.hasParent()) {
            return this.getAllParents(item.parent, currentlyOpen);
        } else {
            return currentlyOpen;
        }
    }

    nextCurrentlyOpen(currentlyOpen: SidenavItem[]) {
        this._currentlyOpen = currentlyOpen;
        this._currentlyOpenSubject.next(currentlyOpen);
    }

    nextCurrentlyOpenByRoute(route: string) {
        let currentlyOpen = [];
        let item = this.findByRouteRecursive(route, this._items);
        if (item && item.hasParent()) {
            currentlyOpen = this.getAllParents(item);
        } else if (item) {
            currentlyOpen = [item];
        }
        this.nextCurrentlyOpen(currentlyOpen);
    }

    findByRouteRecursive(route: string, collection: SidenavItem[]) {
        let result = _.find(collection, { 'route': route });

        if (!result) {
            _.each(collection, (item) => {
                if (item.hasSubItems()) {
                    let found = this.findByRouteRecursive(route, item.subItems);

                    if (found) {
                        result = found;
                        return false;
                    }
                }
            });
        }
        return result;
    }

    get currentlyOpen() {
        return this._currentlyOpen;
    }

    getSidenavItemByRoute(route) {
        return this.findByRouteRecursive(route, this._items);
    }
}
