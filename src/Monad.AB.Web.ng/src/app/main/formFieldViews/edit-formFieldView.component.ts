import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';

import { FormFieldView, FormViewTypeModel } from '../formFields/shared/formField';
import { FormFieldViewsService } from './shared/formFieldViews.service';

@Component({
    selector: 'ms-edit-formFieldView',
    templateUrl: './edit-formFieldView.component.html',
    styleUrls: ['./edit-formFieldView.component.scss']
})
export class EditFormFieldViewComponent implements OnInit {
    formGroup: FormGroup;
    formFieldView: FormFieldView = new FormFieldView();
    formViewType: FormViewTypeModel = new FormViewTypeModel();
    serverErrorMessage: string;
    projectId: number;
    formId: number;
    formFieldViewId: number;
    formfieldId: number;

    constructor(
        private snackBar: MatSnackBar,
        private formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private formFieldViewsService: FormFieldViewsService
    ) {
        this.formGroup = formBuilder.group({
            id: [''],
    
            name: this.formBuilder.control({ value: '', disabled: true }),
            row: ['', [Validators.required]],
            rowSpan: ['', [Validators.required]],
            column: ['', [Validators.required]],
            columnSpan: ['', [Validators.required]],
            readOnly: [''],
            hidden: [''],
        });
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.projectId = params['projectid'];
            this.formId = params['formid'];
            this.formfieldId = params['formfieldid'];
            this.formFieldViewId = params['formFieldViewid'];

            
            if (!this.formFieldViewId)
                return;

            this.formFieldViewsService.getFormFieldView(this.formFieldViewId)
                .subscribe(
                formFieldView => {
                    this.formFieldView = formFieldView;
                    this.formViewType = formFieldView.view
                    console.log(formFieldView.view);
                    this.formGroup.controls['id'].setValue(this.formFieldViewId);
                },
                response => {
                    if (response.status == 404) {
                        this.router.navigate(['NotFound']);
                    }
                });
        });
    }

    saveFormFieldView(data) {
        this.serverErrorMessage = '';
        data.projectID = this.projectId;
        data.formID = this.formId;
        data.id = this.formFieldViewId;
        data.view = this.formViewType;
        data.formFieldId = this.formfieldId;
        data.fieldID = this.formfieldId;
        this.formFieldViewsService.editFormFieldView(data)
            .subscribe(response => {
                if (response.statusCode == 204) {
                    let snackBarRef = this.snackBar.open('Field View saved Successfully!', 'Close', {
                        duration: 500
                    });
                    snackBarRef.afterDismissed().subscribe(() => {
                        this.router.navigateByUrl('/projects/' + this.projectId + '/forms/' + this.formId + '/fields/' + this.formfieldId);
                    });
                    
                } else if (response.statusCode == 412) {
                    this.serverErrorMessage = "Some details were missing!";
                } else {
                    this.serverErrorMessage = response.content;
                }
            });
    }

    cancelChanges(e) {

        this.router.navigateByUrl('/projects/' + this.projectId + '/forms/' + this.formId + '/fields/' + this.formfieldId);
    }
}
