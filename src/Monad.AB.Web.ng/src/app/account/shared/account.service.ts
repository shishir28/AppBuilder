import { Http, URLSearchParams, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable'
@Injectable()

export class AccountService {
    options: RequestOptions;
    constructor(private http: Http) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        this.options = new RequestOptions({ headers: headers });
    }

    login(loginUser) {
        return this.http.post("/api/account/login", JSON.stringify(loginUser), this.options)
            .map(res => res.json());
    }

    register(registerUser) {
        return this.http.post("/api/account/register", JSON.stringify(registerUser), this.options)
            .map(res => res.json());
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }
}
