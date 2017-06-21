import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MdSnackBar } from "@angular/material";
import { ProjectsService } from './shared/projects.service'
import { Project } from './shared/project'

@Component({
    selector: 'ms-edit-project',
    templateUrl: './edit-project.component.html',
    styleUrls: ['./edit-project.component.scss']
})
export class EditProjectComponent implements OnInit {
    projForm: FormGroup;
    project: Project = new Project();
    serverErrorMessage: string;
    constructor(
        private snackBar: MdSnackBar,
        private formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private projectsService: ProjectsService
    ) {
        this.projForm = formBuilder.group({
            id: [''],
            userName: [''],
            name: ['', [Validators.required]],
            title: ['', [Validators.required]],
            description: [''],
            rootNamespace: ['', [Validators.required]],
            companyName: ['', [Validators.required]],
            createdDateUtc: [''],
            lastModifiedDateUtc: [''],
            lastModifiedBy: [''],
        });
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
                    this.projForm.controls['id'].setValue(projectid);
                },
                response => {
                    if (response.status == 404) {
                        this.router.navigate(['NotFound']);
                    }
                });
        });
    }

    saveProject(data) {
        this.serverErrorMessage = '';
        data.userName = "a@b.com";// need to come from cache
        this.projectsService.updateProject(data)
            .subscribe(response => {
                if (response.statusCode == 204) {
                    let snackBarRef = this.snackBar.open('Project information saved Successfully!', 'Close', {
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

    cancelChanges(e) {   
        this.router.navigateByUrl('/projects');
    }


}
