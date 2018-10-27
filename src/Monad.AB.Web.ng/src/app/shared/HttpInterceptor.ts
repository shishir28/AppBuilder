import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { ConnectionBackend, Headers, Http, Request, RequestOptions, RequestOptionsArgs, Response } from '@angular/http';
import { empty as observableEmpty, throwError as observableThrowError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Rx';


declare var $: any;

@Injectable()
// mimicking intercptor of angualrjs. Adding  token and centralized error handling 
export class HttpInterceptor extends Http {

    public pendingRequests: number = 0;
    public showLoading: boolean = false;

    private numberOfAttempts: number;
    constructor(backend: ConnectionBackend, defaultOptions: RequestOptions, private location: Location) {
        super(backend, defaultOptions);
        this.numberOfAttempts = 3;
    }

    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        return super.request(url, this.getRequestOptions(options)).pipe(
            catchError((error: any) => {
                return this.interceptErrors(error);
            }));
    }

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.get(url, this.getRequestOptions(options)).pipe(
            catchError((error: any) => {
                return this.interceptErrors(error);
            }));
    }

    post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        return super.post(url, body, this.getRequestOptions(options)).pipe(
            catchError((error: any) => {
                return this.interceptErrors(error);
            }));
    }

    put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        return super.put(url, body, this.getRequestOptions(options)).pipe(
            catchError((error: any) => {
                return this.interceptErrors(error);
            }));
    }

    delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.delete(url, this.getRequestOptions(options)).pipe(
            catchError((error: any) => {
                return this.interceptErrors(error);
            }));
    }

    patch(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        return super.delete(url, this.getRequestOptions(options));
    }

    head(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.head(url, this.getRequestOptions(options)).pipe(
            catchError((error: any) => {
                return this.interceptErrors(error);
            }));
    }

    options(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.options(url, this.getRequestOptions(options)).pipe(
            catchError((error: any) => {
                return this.interceptErrors(error);
            }));
    }

    private getRequestOptions(options?: RequestOptionsArgs): RequestOptionsArgs {
        if (!options) {
            options = new RequestOptions();
        }

        if (!options.headers) {
            options.headers = new Headers();
        }
        options.headers.append('Content-Type', 'application/json');
        options.headers.append('If-Modified-Since', 'Sun, 01 Jan 2017 00:00:00 GMT');
        options.headers.append('Cache-Control', 'no-store, no-cache');
        options.headers.append('Pragma', 'no-cache Expires: 0');

        if (sessionStorage.getItem('currentUser')) {
            options.headers.append('x-access-token', sessionStorage.getItem('currentUserToken'));
        }
        return options;
    }

    private interceptErrors(err: any): Observable<Response> {
        let locationPath = (location.origin);
        let lastCharacter = locationPath.substr(locationPath.length - 1);
        debugger;
        if (lastCharacter != '/') {
            locationPath = locationPath + '/';
        }

        if (err.status === 404) {
            window.location.href = locationPath + 'notFound';
            return observableEmpty();
        } else if (err.status === 401 || err.status === 403) {
            window.location.href = locationPath + 'accessDenied';
            return observableEmpty();
        } else if (err.status === 410) {
            sessionStorage.clear();
            window.location.href = locationPath + 'login';
            return observableEmpty();
        } else if (err.status >= 500) {
            window.location.href = locationPath + 'internalServerError';
            return observableEmpty();
        } else {
            return observableThrowError(err);
        }
    }

}