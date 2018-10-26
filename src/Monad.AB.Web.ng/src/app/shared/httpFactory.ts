import { Location } from '@angular/common';
import { Http, RequestOptions, XHRBackend } from '@angular/http';

import { HttpInterceptor } from './HttpInterceptor';

export function httpFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions, location: Location): Http {
    return new HttpInterceptor(xhrBackend, requestOptions,location);
}
