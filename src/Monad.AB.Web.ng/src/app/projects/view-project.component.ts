import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ProjectsService } from './shared/projects.service'
import { Project } from './shared/project'

@Component({
    selector: 'ms-view-project',
    templateUrl: './view-project.component.html',
    styleUrls: ['./view-project.component.scss']
})
export class ViewProjectComponent implements OnInit {
    projForm: FormGroup;
    project: Project = new Project();
    serverErrorMessage: string;
    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private projectsService: ProjectsService
    ) {
        this.projForm = formBuilder.group({
            id: ['', { disabled: true }],
            userName: ['', { disabled: true }],
            name: ['', { disabled: true }],
            title: ['', { disabled: true }],
            description: ['', { disabled: true }],
            rootNamespace: ['', { disabled: true }],
            companyName: ['', { disabled: true }],
            createdDateUtc: ['', { disabled: true }],
            lastModifiedDateUtc: ['', { disabled: true }],
            lastModifiedBy: ['', { disabled: true }],
        });
    }

    ngOnInit() {
        var id = this.route.params.subscribe(params => {
            var id = params['id'];

            if (!id)
                return;

            this.projectsService.getProject(id)
                .subscribe(
                project => {
                    this.project = project;
                },
                response => {
                    if (response.status == 404) {
                        this.router.navigate(['NotFound']);
                    }
                });
        });
    }


    cancelChanges(e) {
        this.router.navigateByUrl('/projects');
    }


}
