import { Http, URLSearchParams, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable'
@Injectable()

export class FormFieldsService {
    options: RequestOptions;
    constructor(private http: Http) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        this.options = new RequestOptions({ headers: headers });
    }

    getFormFields(formId): Observable<any[]> {
        return this.http.get('/api/formField/GetFormFields?formId=' + formId, this.options)
            .map(this.extractData);
    }

    getFormField(fieldId) {
        return this.http.get('/api/formField/GetFormField?fieldId=' + fieldId)
            .map(res => res.json());
    }

    addFormField(formField) {
        return this.http.post('/api/formField/AddFormField', JSON.stringify(formField), this.options)
            .map(res => res.json());
    }


    editFormField(formField) {
        return this.http.put('/api/formField/EditFormField', JSON.stringify(formField), this.options)
            .map(res => res.json());
    }

    deleteFormForm(formFieldId) {
        return this.http.delete('/api/formField/DeleteFormField?formFieldId=' + formFieldId)
            .map(res => res.json());
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

}
