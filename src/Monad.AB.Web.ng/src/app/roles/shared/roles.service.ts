import { Http, URLSearchParams, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable'
@Injectable()

export class RolesService {
    options: RequestOptions;
    constructor(private http: Http) {
        this.options = new RequestOptions();
    }

    getRoles(): Observable<any[]> {
        return this.http.get('/api/role/GetAllRoles')
            .map(res => res.json());
    }

    //getRole(id) {
    //    return this.http.get("/api/role/GetProject?projectId=" + id)
    //        .map(res => res.json());
    //}

    //addRole(role) {
    //    return this.http.post("/api/role/addproject/", JSON.stringify(role))
    //        .map(res => res.json());
    //}

    //updateRole(role) {
    //    return this.http.put("/api/role/editproject/", JSON.stringify(role))
    //        .map(res => res.json());
    //}

    deleteRole(id) {
        return this.http.delete("/api/role/deleteproject?projectId=" + id)
            .map(res => res.json());
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }
}
