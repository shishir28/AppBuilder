import { Http, URLSearchParams, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs'
@Injectable()

export class FormsService {
    constructor(private http: Http) {
    }

    getForms(projectId): Observable<any[]> {
        return this.http.get('/api/form/GetForms?projectId=' + projectId)
            .map(this.extractData);
    }

    getForm(formId) {
        return this.http.get('/api/form/GetForm?formId=' + formId)
            .map(res => res.json());
    }

    addForm(form) {
        return this.http.post("/api/form/addform/", JSON.stringify(form))
            .map(res => res.json());
    }

    editForm(form) {
        return this.http.put("/api/form/editform/", JSON.stringify(form))
            .map(res => res.json());
    }

    deleteForm(id) {
        return this.http.delete("/api/form/deleteform?formid=" + id)
            .map(res => res.json());
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

}
