import { XHRBackend, Http, RequestOptions } from "@angular/http";
import { HttpInterceptor } from "./HttpInterceptor";
import { Router, ActivatedRoute } from '@angular/router';

export function httpFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions, router: Router): Http {
    return new HttpInterceptor(xhrBackend, requestOptions, router);
}