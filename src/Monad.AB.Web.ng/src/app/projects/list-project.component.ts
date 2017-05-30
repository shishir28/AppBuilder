import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './shared/projects.service';
@Component({
    selector: 'app-list-project',
    templateUrl: './list-project.component.html',
    styleUrls: ['./list-project.component.scss']
})
export class ListProjectComponent implements OnInit {
    private projects: any[];
    constructor(private projectsService: ProjectsService) {
    }

    ngOnInit() {
        this.projectsService.getProjects('a@b.com')
            .subscribe(data => {
                this.projects = data;
            });
    }

}
