import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FormFieldsService } from './shared/formFields.service';
import { FormField } from './shared/formField';

@Component({
    selector: 'ms-view-formField',
    templateUrl: './view-formField.component.html',
    styleUrls: ['./view-formField.component.scss']
})
export class ViewFormFieldComponent implements OnInit {

    formField: FormField = new FormField();
    serverErrorMessage: string;
    projectId: number;
    formId: number;
    formFieldId: number;

    constructor(private formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private formFieldsService: FormFieldsService
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


    cancelChanges(e) {
        this.router.navigateByUrl('/projects/' + this.projectId + '/forms/' + this.formId);
    }

}
