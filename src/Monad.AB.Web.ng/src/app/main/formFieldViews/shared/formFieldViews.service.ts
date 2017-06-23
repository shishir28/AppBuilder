import { Http, URLSearchParams, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable'
@Injectable()

export class FormFieldViewsService {
    constructor(private http: Http) {
    }
   
    getFormFieldViews(fieldId): Observable<any[]> {
        return this.http.get('/api/formField/GetFormFieldView?fieldId=' + fieldId)
            .map(this.extractData);
    }

    getFormFieldView(formFieldViewId) {
        return this.http.get('/api/formField/GetFieldView?formFieldViewId=' + formFieldViewId)
            .map(res => res.json());
    }


    editFormFieldView(formFieldView) {
        return this.http.put('/api/formField/EditFormFieldView', JSON.stringify(formFieldView))
            .map(res => res.json());
    }

    

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

}
