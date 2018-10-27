import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';

import { Project } from './shared/project';
import { ProjectsService } from './shared/projects.service';

@Component({
    selector: 'ms-new-project',
    templateUrl: './new-project.component.html',
    styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {
    projForm: FormGroup;
    project: Project = new Project();
    serverErrorMessage: string;
    constructor(
        private snackBar: MatSnackBar,
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
            if (projectid)
                return;
        });
    }

    saveProject(data) {
        this.serverErrorMessage = '';
        data.userName = sessionStorage.getItem('currentUser');
        this.projectsService.addProject(data)
            .subscribe(response => {
                if (response.statusCode == 201) {
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



