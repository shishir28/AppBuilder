﻿import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';

import { DialogService } from '../../widgets/dialogs/dialog.service';
import { FormField } from '../formFields/shared/formField';
import { FormFieldsService } from '../formFields/shared/formFields.service';
import { Form } from './shared/form';
import { FormsService } from './shared/forms.service';

@Component({
    selector: 'ms-view-form',
    templateUrl: './view-form.component.html',
    styleUrls: ['./view-form.component.scss']
})
export class ViewFormComponent implements OnInit, AfterViewInit {
    private forms: Form[];
    projectId: number;
    formId: number;
    form: Form = new Form();
    private formFields: FormField[];
    cellWidths = [];
    serverErrorMessage: string;
    tableHover: boolean = true;
    tableStriped: boolean = true;
    tableCondensed: boolean = true;
    tableBordered: boolean;
    @ViewChild('tbody')
    tbody: ElementRef;
    constructor(private router: Router,
        private route: ActivatedRoute,
        private snackBar: MatSnackBar,
        private dialogService: DialogService,
        private formsService: FormsService,
        private formFieldsService: FormFieldsService) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.formId = params['formid'];
            this.projectId = params['projectid'];

            if (!this.formId)
                return;

            this.formsService.getForm(this.formId)
                .subscribe(
                form => {
                    this.form = form;
                    this.form.id = this.formId;
                    this.formsService.getForms(this.projectId)
                        .subscribe(data => {
                            this.forms = data.filter(x => x.id != this.formId);

                        });
                    this.formFieldsService.getFormFields(this.formId)
                        .subscribe(data => {
                            this.formFields = data;
                        });
                },
                response => {
                    if (response.status == 404) {
                        this.router.navigate(['NotFound']);
                    }
                });
        });
    }

    ngAfterViewInit() {
    }

    editForm(projectId, formId): void {
        this.router.navigateByUrl('/projects/' + projectId + '/forms/edit/' + formId);
    }

    deleteForm(projectId, formId): void {
        this.dialogService.confirm('Delete Form', 'Are you sure want to delete this form?')
            .subscribe(result => {
                let res: any = result;
                if (res == 'yes') {
                    this.formsService.deleteForm(formId)
                        .subscribe(response => {
                            if (response.statusCode == 204) {
                                let snackBarRef = this.snackBar.open('Form deleted Successfully!', 'Close', {
                                    duration: 500
                                });
                                snackBarRef.afterDismissed().subscribe(() => {
                                    this.router.navigateByUrl('/projects/' + this.projectId);
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

    cancelChanges(e) {
        this.router.navigateByUrl('/projects/' + this.projectId);
    }

    viewFormField(projectId, formId, fieldId): void {
        this.router.navigateByUrl('/projects/' + projectId + '/forms/' + formId + '/fields/' + fieldId);
    }

    addFormField(projectId, formId) {
        this.router.navigateByUrl('/projects/' + projectId + '/forms/' + formId + '/fields/new');
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
                                    this.formFieldsService.getFormFields(formId)
                                        .subscribe(data => {
                                            this.formFields = data;
                                        });
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
}
