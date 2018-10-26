import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from "@angular/material";
import { DialogService } from '../../widgets/dialogs/dialog.service';
import { ProjectsService } from './shared/projects.service';
import { FormsService } from '../forms/shared/forms.service';
import { Project } from './shared/project'
import { Form } from '../forms/shared/form';
declare let ResizeSensor;

@Component({
    selector: 'ms-view-project',
    templateUrl: './view-project.component.html',
    styleUrls: ['./view-project.component.scss']
})
export class ViewProjectComponent implements OnInit, AfterViewInit {
    project: Project = new Project();
    private forms: Form[];
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
        private projectsService: ProjectsService,
        private formsService: FormsService) {
    }

    ngOnInit() {
        var id = this.route.params.subscribe(params => {
            var projectid = params['projectid'];

            if (!projectid)
                return;

            this.projectsService.getProject(projectid)
                .subscribe(
                project => {
                    this.project = project;
                    this.formsService.getForms(this.project.id)
                        .subscribe(data => {
                            this.forms = data;
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

    editProject(projectId): void {
        this.router.navigateByUrl('/projects/edit/' + projectId);
    }

    deleteProject(projectId): void {
        this.dialogService.confirm('Delete Project', 'Are you sure want to delete this project?')
            .subscribe(result => {
                let res: any = result;
                if (res == 'yes') {
                    this.projectsService.deleteProject(projectId)
                        .subscribe(response => {
                            if (response.statusCode == 204) {
                                let snackBarRef = this.snackBar.open('Project deleted Successfully!', 'Close', {
                                    duration: 500
                                });
                                snackBarRef.afterDismissed().subscribe(() => {
                                    this.router.navigateByUrl('/projects');
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

    viewForm(projectId, formId): void {
        this.router.navigateByUrl('/projects/' + projectId + '/forms/' + formId);
    }

    addForm(projectId) {
        this.router.navigateByUrl('/projects/' + projectId + '/forms/new');
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
                                    this.formsService.getForms(projectId)
                                        .subscribe(data => {
                                            this.forms = data;
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

    cancelChanges(e) {
        this.router.navigateByUrl('/projects');
    }
}