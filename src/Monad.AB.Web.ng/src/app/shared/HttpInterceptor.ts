import { Injectable } from '@angular/core'
import { ConnectionBackend, RequestOptions, Request, RequestOptionsArgs, Response, Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Router, ActivatedRoute } from '@angular/router';
@Injectable()
// mimicking intercptor of angualrjs. Adding  token and centralized error handling 
export class HttpInterceptor extends Http {
    private numberOfAttempts: number;
    constructor(backend: ConnectionBackend, defaultOptions: RequestOptions, public router: Router) {
        super(backend, defaultOptions);
        this.numberOfAttempts = 3;
    }

    request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        return super.request(url, this.getRequestOptions(options))
            .catch((error: any) => {
                return this.interceptErrors(error);
            });
    }

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.get(url, this.getRequestOptions(options))
            .catch((error: any) => {
                return this.interceptErrors(error);
            });
    }

    post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        return super.post(url, body, this.getRequestOptions(options))
            .catch((error: any) => {
                return this.interceptErrors(error);
            });
    }

    put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        return super.put(url, body, this.getRequestOptions(options))
            .catch((error: any) => {
                return this.interceptErrors(error);
            });
    }

    delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.delete(url, this.getRequestOptions(options))
            .catch((error: any) => {
                return this.interceptErrors(error);
            });
    }

    patch(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
        return super.delete(url, this.getRequestOptions(options));
    }

    head(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.head(url, this.getRequestOptions(options))
            .catch((error: any) => {
                return this.interceptErrors(error);
            });
    }

    options(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return super.options(url, this.getRequestOptions(options))
            .catch((error: any) => {
                return this.interceptErrors(error);
            });
    }

    private getRequestOptions(options?: RequestOptionsArgs): RequestOptionsArgs {
        if (!options) {
            options = new RequestOptions();
        }

        if (!options.headers) {
            options.headers = new Headers();
        }
        options.headers.append('Content-Type', 'application/json');

        if (localStorage.getItem('currentUser')) {
            options.headers.append('x-access-token', localStorage.getItem('currentUserToken'));
        }
        return options;
    }

    private interceptErrors(err: any): Observable<Response> {
        if (err.status === 404) {
            this.router.navigateByUrl('/notFound');
            return Observable.empty();

        } else if (err.status === 401 || err.status === 403) {
            this.router.navigateByUrl('/accessDenied');
            return Observable.empty();
        } else if (err.status >= 500) {
            this.router.navigateByUrl('/internalServerError');
            return Observable.empty();
        } else {
            return Observable.throw(err);
        }
    }
}
