import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FormFieldViewsService } from './shared/formFieldViews.service';
import { FormFieldView } from '../formFields/shared/formField';

@Component({
    selector: 'ms-edit-formFieldView',
    templateUrl: './edit-formFieldView.component.html',
    styleUrls: ['./edit-formFieldView.component.scss']
})
export class EditFormFieldViewComponent implements OnInit {
    formGroup: FormGroup;
    formFieldView: FormFieldView = new FormFieldView();
    serverErrorMessage: string;
    projectId: number;
    formId: number;
    formFieldViewId: number;
    formfieldid: number;

    constructor(private formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private formFieldViewsService: FormFieldViewsService
    ) {
        this.formGroup = formBuilder.group({
            id: [''],
            viewID: ['', [Validators.required]],
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
            this.formfieldid = params['formfieldid'];
            this.formFieldViewId = params['formFieldViewid'];

            
            if (!this.formFieldViewId)
                return;

            this.formFieldViewsService.getFormFieldView(this.formFieldViewId)
                .subscribe(
                formFieldView => {
                    this.formFieldView = formFieldView;
                    this.formGroup.controls['id'].setValue(this.formFieldViewId);
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
        data.id = this.formFieldViewId;
        this.formFieldViewsService.editFormFieldView(data)
            .subscribe(response => {
                if (response.statusCode == 204) {
                    this.router.navigateByUrl('/projects/' + this.projectId + '/forms/' + this.formId);
                } else if (response.statusCode == 412) {
                    this.serverErrorMessage = "Some details were missing!";
                } else {
                    this.serverErrorMessage = response.content;
                }
            });
    }

    cancelChanges(e) {

        this.router.navigateByUrl('/projects/' + this.projectId + '/forms/' + this.formId + '/fields/' + this.formfieldid);
    }
}
