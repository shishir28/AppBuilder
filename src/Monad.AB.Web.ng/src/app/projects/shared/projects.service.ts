import { Http, URLSearchParams, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable'
@Injectable()
export class ProjectsService {

    constructor(private http: Http) {
        //
    }

    getProjects(userName): Observable<any[]> {
        let result: Observable<any[]>;
        let params = new URLSearchParams();
        params.set('userName', userName);
        let options = new RequestOptions({
            search: params
        });
        return this.http.get('api/project/GetProjects', options)
            .map(this.extractData);

    }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }
}
