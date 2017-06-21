import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MdSnackBar } from "@angular/material";

import { FormsService } from './shared/forms.service'
import { Form } from './shared/form'

@Component({
    selector: 'ms-new-form',
    templateUrl: './new-form.component.html',
    styleUrls: ['./new-form.component.scss']
})
export class NewFormComponent implements OnInit {
    private forms: Form[];
    formGroup: FormGroup;
    form: Form = new Form();
    serverErrorMessage: string;
    projectId: string;
    formId: string;
    constructor(
        private snackBar: MdSnackBar,
        private formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private formsService: FormsService
    ) {
        this.formGroup = formBuilder.group({
            id: [''],
            formName: ['', [Validators.required]],
            formTitle: ['', [Validators.required]],
            formDescription: [''],
            dependencyID: ['']
        });
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.projectId = params['projectid'];
            this.formId = params['formid'];
            if (this.formId)
                return;
            this.formsService.getForms(this.projectId)
                .subscribe(data => {
                    this.forms = data;
                });

        });
    }

    saveForm(data) {
        this.serverErrorMessage = '';
        data.projectID = this.projectId;
        this.formsService.addForm(data)
            .subscribe(response => {
                if (response.statusCode == 201) {
                    let snackBarRef = this.snackBar.open('Form information saved Successfully!', 'Close', {
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

    cancelChanges(e) {
        this.router.navigateByUrl('/projects/' + this.projectId);
    }
}

