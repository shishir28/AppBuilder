import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { FormFieldViewsService } from './shared/formFieldViews.service';
import { FormFieldView } from '../formFields/shared/formField';

@Component({
    selector: 'ms-view-formFieldView',
    templateUrl: './view-formFieldView.component.html',
    styleUrls: ['./view-formFieldView.component.scss']
})
export class ViewFormFieldViewComponent implements OnInit {

    formFieldView: FormFieldView = new FormFieldView();
    serverErrorMessage: string;
    projectId: number;
    formId: number;
    formFieldViewId: number;

    constructor(private formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private formFieldViewsService: FormFieldViewsService
    ) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.projectId = params['projectid'];
            this.formId = params['formid'];
            this.formFieldViewId = params['formFieldViewid'];
            if (!this.formFieldViewId)
                return;

            this.formFieldViewsService.getFormFieldView(this.formFieldViewId)
                .subscribe(
                formFieldView => {
                    this.formFieldView = formFieldView;
                },
                response => {
                    if (response.status == 404) {
                        this.router.navigate(['NotFound']);
                    }
                });;
        });
    }

    editformFieldView(projectId, formId, fieldId): void {
        this.router.navigateByUrl('/projects/' + projectId + '/forms/' + formId + '/fields/edit/' + fieldId);
    }


    cancelChanges(e) {
        this.router.navigateByUrl('/projects/' + this.projectId + '/forms/' + this.formId);
    }

}
