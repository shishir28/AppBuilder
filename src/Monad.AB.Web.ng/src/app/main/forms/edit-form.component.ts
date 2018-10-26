import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from "@angular/material";
import { FormsService } from './shared/forms.service'
import { Form } from './shared/form'

@Component({
    selector: 'ms-edit-form',
    templateUrl: './edit-form.component.html',
    styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit {
    private forms: Form[];
    formGroup: FormGroup;
    form: Form = new Form();
    serverErrorMessage: string;
    projectId: string;
    formId: string;
    constructor(
        private snackBar: MatSnackBar,
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
        var id = this.route.params.subscribe(params => {
            this.projectId = params['projectid'];
            this.formId = params['formid'];

            if (!this.formId)
                return;

            this.formsService.getForm(this.formId)
                .subscribe(
                form => {
                    this.form = form;
                    this.formGroup.controls['id'].setValue(this.formId);
                    this.formsService.getForms(this.projectId)
                        .subscribe(data => {
                            this.forms = data.filter(x => x.id != this.formId);
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
        data.id = this.formId;
        data.projectID = this.projectId;
        this.formsService.editForm(data)
            .subscribe(response => {
                if (response.statusCode == 204) {
                    let snackBarRef = this.snackBar.open('Form information saved Successfully!', 'Close', {
                        duration: 500
                    });
                    snackBarRef.afterDismissed().subscribe(() => {
                        this.router.navigateByUrl('/projects/' + this.projectId)
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

