import { Http, URLSearchParams, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable'
@Injectable()

@Injectable()
export class UsersService {

    options: RequestOptions;
    constructor(private http: Http) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        this.options = new RequestOptions({ headers: headers });
    }

    getUserProfile(userName) {
        return this.http.get('/api/user/GetUserDetails?userName=' + userName)
            .map(res => res.json());
    }


    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }
}
