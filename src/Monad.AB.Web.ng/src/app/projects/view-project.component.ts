import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectsService } from './shared/projects.service'
import { Project } from './shared/project'

@Component({
    selector: 'ms-view-project',
    templateUrl: './view-project.component.html',
    styleUrls: ['./view-project.component.scss']
})
export class ViewProjectComponent implements OnInit {
    project: Project = new Project();
    constructor(private router: Router, private route: ActivatedRoute, private projectsService: ProjectsService) {
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