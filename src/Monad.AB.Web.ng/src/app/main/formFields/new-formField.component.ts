import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FormFieldsService } from './shared/formFields.service';
import { FormField } from './shared/formField';


@Component({
    selector: 'ms-new-formField',
    templateUrl: './new-formField.component.html',
    styleUrls: ['./new-formField.component.scss']
})
export class NewFormFieldComponent implements OnInit {
    formGroup: FormGroup;
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
        this.formGroup = formBuilder.group({
            id: [''],
            name: ['', [Validators.required]],
            label: [''],
            description: [''],
            fieldTypeID: ['', [Validators.required]],
            width: ['', [Validators.required]],
            rowNumber: ['', [Validators.required]],
            rowSpan: ['', [Validators.required]],
            columnNumber: ['', [Validators.required]],
            columnSpan: ['', [Validators.required]],
            isRequired: [''],
        });
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.projectId = params['projectid'];
            this.formId = params['formid'];
            this.formFieldId = params['formfieldid'];
            if (this.formFieldId)
                return;
        });
    }

    saveForm(data) {
        this.serverErrorMessage = '';
        data.projectID = this.projectId;
        data.formID = this.formId;
        console.log(data);
        this.formFieldsService.addFormField(data)
            .subscribe(response => {
                if (response.statusCode == 201) {
                    this.router.navigateByUrl('/projects/' + this.projectId + '/forms/' + this.formId);
                } else if (response.statusCode == 412) {
                    this.serverErrorMessage = "Some details were missing!";
                } else {
                    this.serverErrorMessage = response.content;
                }
            });
    }

    cancelChanges(e) {
        this.router.navigateByUrl('/projects/' + this.projectId + '/forms/' + this.formId);
    }

}
