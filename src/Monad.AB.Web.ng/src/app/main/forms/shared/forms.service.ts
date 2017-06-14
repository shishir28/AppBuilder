import { Http, URLSearchParams, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable'
@Injectable()

export class FormsService {
    options: RequestOptions;
    constructor(private http: Http) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        this.options = new RequestOptions({ headers: headers });
    }

    getForms(projectId): Observable<any[]> {
        return this.http.get('/api/form/GetForms?projectId=' + projectId, this.options)
            .map(this.extractData);
    }

    getForm(formId) {
        return this.http.get('/api/form/GetForm?formId=' + formId)
            .map(res => res.json());
    }

    addForm(form) {
        return this.http.post("/api/form/addform/", JSON.stringify(form), this.options)
            .map(res => res.json());
    }


    editForm(form) {
        return this.http.put("/api/form/editform/", JSON.stringify(form), this.options)
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
