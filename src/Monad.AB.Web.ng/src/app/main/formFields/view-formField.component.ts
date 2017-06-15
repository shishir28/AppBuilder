import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FormFieldsService } from './shared/formFields.service';
import { FormFieldViewsService } from '../formFieldViews/shared/formFieldViews.service';

import { FormField } from './shared/formField';
import { FormFieldView } from './shared/formField';


@Component({
    selector: 'ms-view-formField',
    templateUrl: './view-formField.component.html',
    styleUrls: ['./view-formField.component.scss']
})
export class ViewFormFieldComponent implements OnInit {

    formField: FormField = new FormField();
    private formFieldViews: FormFieldView[];

    serverErrorMessage: string;
    projectId: number;
    formId: number;
    formFieldId: number;

    constructor(private formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private formFieldsService: FormFieldsService,
        private formFieldViewsService: FormFieldViewsService
    ) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.projectId = params['projectid'];
            this.formId = params['formid'];
            this.formFieldId = params['formfieldid'];
            if (!this.formFieldId)
                return;

            this.formFieldsService.getFormField(this.formFieldId)
                .subscribe(
                formField => {
                    this.formField = formField;

                    this.formFieldViewsService.getFormFieldViews(this.formField.id)
                        .subscribe(data => {
                            this.formFieldViews = data;
                            console.log(data);
                        });
                },
                response => {
                    if (response.status == 404) {
                        this.router.navigate(['NotFound']);
                    }
                });
        });
    }

    editFormField(projectId, formId, fieldId): void {
        this.router.navigateByUrl('/projects/' + projectId + '/forms/' + formId + '/fields/edit/' + fieldId);
    }
    editFormFieldView(projectId, formId, fieldId, formFieldViewId): void {
        this.router.navigateByUrl('/projects/' + projectId + '/forms/' + formId + '/fields/' + fieldId + '/formFieldViews/edit/' + formFieldViewId);
    }
    cancelChanges(e) {
        this.router.navigateByUrl('/projects/' + this.projectId + '/forms/' + this.formId);
    }

}
