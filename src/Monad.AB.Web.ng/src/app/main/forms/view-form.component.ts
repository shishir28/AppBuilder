import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsService } from './shared/forms.service';
import { Form } from './shared/form';

@Component({
    selector: 'ms-view-form',
    templateUrl: './view-form.component.html',
    styleUrls: ['./view-form.component.scss']
})
export class ViewFormComponent implements OnInit, AfterViewInit {
    projectId: number;
    formId: number;
    form: Form = new Form();
    //private forms: Form[];
    cellWidths = [];
    tableHover: boolean = true;
    tableStriped: boolean = true;
    tableCondensed: boolean = true;
    tableBordered: boolean;
    @ViewChild('tbody')
    tbody: ElementRef;
    constructor(private router: Router, private route: ActivatedRoute,
        private formsService: FormsService) {
    }

    ngOnInit() {
        var id = this.route.params.subscribe(params => {
            this.formId = params['formid'];
            this.projectId = params['projectid'];

            if (!this.formId)
                return;

            this.formsService.getForm(this.formId)
                .subscribe(
                form => {
                    this.form = form;
                    this.form.id = this.formId;
                    //this.formsService.getForms(this.project.id)
                    //    .subscribe(data => {
                    //        this.forms = data;
                    //    });
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
        // to do 
    }

    cancelChanges(e) {
        this.router.navigateByUrl('/projects/' + this.projectId);

    }

    editProject(projectId): void {
        this.router.navigateByUrl('/projects/edit/' + projectId);
    }

    viewFormField(projectId, formId, fieldId): void {
        this.router.navigateByUrl('/projects/' + projectId + '/forms/' + formId);
    }

    addFormField(projectId, formId) {
        this.router.navigateByUrl('/projects/' + projectId + '/forms/new');
    }

    editFormField(projectId, formId, fieldId): void {
        this.router.navigateByUrl('/projects/' + projectId + '/forms/edit/' + formId);
    }

    deleteFormField(projectId, formId, fieldId): void {
        // to do 
    }


}
