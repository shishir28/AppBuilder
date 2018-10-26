import { Http, URLSearchParams, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs'
import {map} from 'rxjs/operators';

@Injectable()

export class FormFieldsService {
    constructor(private http: Http) {
    }

    getFormFields(formId): Observable<any[]> {
        return this.http.get('/api/formField/GetFormFields?formId=' + formId)
            .map(this.extractData);
    }

    getFormField(fieldId) {
        return this.http.get('/api/formField/GetFormField?fieldId=' + fieldId)
            .pipe(map(res => res.json()));
    }

    addFormField(formField) {
        return this.http.post('/api/formField/AddFormField', JSON.stringify(formField))
            .map(res => res.json());
    }


    editFormField(formField) {
        return this.http.put('/api/formField/EditFormField', JSON.stringify(formField))
            .map(res => res.json());
    }

    deleteFormField(formFieldId) {
        return this.http.delete('/api/formField/DeleteFormField?formFieldId=' + formFieldId)
            .map(res => res.json());
    }

    getFieldTypes() {
        return this.http.get('/api/formField/GetFieldTypes')
            .map(res => res.json());
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

}
