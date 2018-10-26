import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from "@angular/material";

import { DialogService } from '../../widgets/dialogs/dialog.service';
import { FormFieldsService } from './shared/formFields.service';
import { FormFieldViewsService } from '../formFieldViews/shared/formFieldViews.service';
import { FormField, FieldType } from './shared/formField';
import { FormFieldView } from './shared/formField';

@Component({
    selector: 'ms-view-formField',
    templateUrl: './view-formField.component.html',
    styleUrls: ['./view-formField.component.scss']
})
export class ViewFormFieldComponent implements OnInit {
    private fieldTypes: FieldType[];
    formField: FormField = new FormField();
    private formFieldViews: FormFieldView[];
    serverErrorMessage: string;
    projectId: number;
    formId: number;
    formFieldId: number;

    constructor(private formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private snackBar: MatSnackBar,
        private dialogService: DialogService,
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
                    this.formFieldsService.getFieldTypes()
                        .subscribe(data => {
                            this.fieldTypes = data;
                        });
                    this.formFieldViewsService.getFormFieldViews(this.formField.id)
                        .subscribe(data => {
                            this.formFieldViews = data;
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

    deleteFormField(projectId, formId, fieldId): void {
        this.dialogService.confirm('Delete Field', 'Are you sure want to delete this Field?')
            .subscribe(result => {
                let res: any = result;
                if (res == 'yes') {
                    this.formFieldsService.deleteFormField(fieldId)
                        .subscribe(response => {
                            if (response.statusCode == 204) {
                                let snackBarRef = this.snackBar.open('Field deleted Successfully!', 'Close', {
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
            });
    }

    editFormFieldView(projectId, formId, fieldId, formFieldViewId): void {
        this.router.navigateByUrl('/projects/' + projectId + '/forms/' + formId + '/fields/' + fieldId + '/formFieldViews/edit/' + formFieldViewId);
    }
    cancelChanges(e) {
        this.router.navigateByUrl('/projects/' + this.projectId + '/forms/' + this.formId);
    }
}