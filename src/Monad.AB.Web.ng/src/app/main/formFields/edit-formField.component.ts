import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MdSnackBar } from "@angular/material";

import { FormFieldsService } from './shared/formFields.service';
import { FormField, FieldType } from './shared/formField';

@Component({
  selector: 'ms-edit-formField',
  templateUrl: './edit-formField.component.html',
  styleUrls: ['./edit-formField.component.scss']
})
export class EditFormFieldComponent implements OnInit {
    private fieldTypes: FieldType[];

    formGroup: FormGroup;
    formField: FormField = new FormField();
    serverErrorMessage: string;
    projectId: number;
    formId: number;
    formFieldId: number;

    constructor(
        private snackBar: MdSnackBar,
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
            if (!this.formFieldId)
                return;

            this.formFieldsService.getFormField(this.formFieldId)
                .subscribe(
                formField => {
                    this.formField = formField;
                    this.formGroup.controls['id'].setValue(this.formFieldId);
                    this.formFieldsService.getFieldTypes()
                        .subscribe(data => {
                            this.fieldTypes = data;
                        });

                },
                response => {
                    if (response.status == 404) {
                        this.router.navigate(['NotFound']);
                    }
                });
        });
  }

    saveForm(data) {
        this.serverErrorMessage = '';
        data.projectID = this.projectId;
        data.formID = this.formId;
        data.id = this.formFieldId;
        this.formFieldsService.editFormField(data)
            .subscribe(response => {
                if (response.statusCode == 204) {
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
