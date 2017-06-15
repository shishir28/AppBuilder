import { Http, URLSearchParams, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable'
@Injectable()

export class FormFieldViewsService {
    options: RequestOptions;
    constructor(private http: Http) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        this.options = new RequestOptions({ headers: headers });
    }

   
    getFormFieldViews(fieldId): Observable<any[]> {
        return this.http.get('/api/formField/GetFormFieldView?fieldId=' + fieldId, this.options)
            .map(this.extractData);
    }

    getFormFieldView(formFieldViewId) {
        return this.http.get('/api/formField/GetFieldView?formFieldViewId=' + formFieldViewId)
            .map(res => res.json());
    }


    editFormFieldView(formFieldView) {
        return this.http.put('/api/formField/EditFormFieldView', JSON.stringify(formFieldView), this.options)
            .map(res => res.json());
    }

    

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

}
