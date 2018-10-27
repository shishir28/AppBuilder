import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';

import { FieldType, FormField } from './shared/formField';
import { FormFieldsService } from './shared/formFields.service';


@Component({
    selector: 'ms-new-formField',
    templateUrl: './new-formField.component.html',
    styleUrls: ['./new-formField.component.scss']
})
export class NewFormFieldComponent implements OnInit {
    private fieldTypes: FieldType[];
    formGroup: FormGroup;
    formField: FormField = new FormField();
    serverErrorMessage: string;
    projectId: number;
    formId: number;
    formFieldId: number;

    constructor(
        private snackBar: MatSnackBar,
        private formBuilder: FormBuilder,
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
            width: [''],
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

            this.formFieldsService.getFieldTypes()
                .subscribe(data => {
                    this.fieldTypes = data;
                });
        });
    }

    saveForm(data) {
        this.serverErrorMessage = '';
        data.projectID = this.projectId;
        data.formID = this.formId;
        this.formFieldsService.addFormField(data)
            .subscribe(response => {
                if (response.statusCode == 201) {
                    let snackBarRef = this.snackBar.open('Form Field saved Successfully!', 'Close', {
                        duration: 500
                    });
                    snackBarRef.afterDismissed().subscribe(() => {
                        this.router.navigateByUrl('/projects/' + this.projectId + '/forms/' + this.formId);
                    });
                   
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
