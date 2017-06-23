﻿import { Http, URLSearchParams, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable'
@Injectable()

export class AccountsService {
    constructor(private http: Http) {
    }

    login(loginUser) {
        return this.http.post("/api/account/login", JSON.stringify(loginUser))
            .map(res => res.json());
    }

    register(registerUser) {
        return this.http.post("/api/account/register", JSON.stringify(registerUser))
            .map(res => res.json());
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }
}
