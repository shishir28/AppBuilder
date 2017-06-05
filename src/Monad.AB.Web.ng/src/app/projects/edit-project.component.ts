import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
            var id = params['id'];

            if (!id)
                return;

            this.projectsService.getProject(id)
                .subscribe(
                project => {
                    this.project = project;
                    this.projForm.controls['id'].setValue(id);
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
                  //  this.ngOnChanges();
                    this.router.navigateByUrl('/projects');
                } else if (response.statusCode == 412) {
                    this.serverErrorMessage = "Some details were missing!";
                } else {
                    this.serverErrorMessage = response.content;
                }
            });
    }

    revert(e) {
        //this.ngOnChanges();
        this.router.navigateByUrl('/projects');
    }

    //ngOnChanges() {
    //    this.projForm.reset({
    //        name: this.project.name,
    //        userName: this.project.userName,
    //        title: this.project.title,
    //        description: this.project.description,
    //        rootNamespace: this.project.rootNamespace,
    //        companyName: this.project.companyName,
    //    });

    //}


}
