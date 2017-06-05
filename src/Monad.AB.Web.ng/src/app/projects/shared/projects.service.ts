﻿import { Http, URLSearchParams, Response, Headers, RequestOptions } from '@angular/http';
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

    getProject(id) {
        return this.http.get("/api/project/GetProject?projectId=" + id)
            .map(res => res.json());
    }

    addProject(project) {
        return this.http.post("/api/project/addproject/", JSON.stringify(project))
            .map(res => res.json());
    }

    updateProject(project) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.put("/api/project/editproject/", JSON.stringify(project), options)
            .map(res => res.json());
    }

    deleteProject(id) {
        return this.http.delete("/api/project/deleteproject?projectId=" + id)
            .map(res => res.json());
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }
}
