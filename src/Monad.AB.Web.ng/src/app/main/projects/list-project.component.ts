import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { routeAnimation } from "../../route.animation";
import { ProjectsService } from './shared/projects.service';
@Component({
    selector: 'ms-list-project',
    templateUrl: './list-project.component.html',
    styleUrls: ['./list-project.component.scss'],
    host: {
        '[@routeAnimation]': 'true'
    },
    animations: [routeAnimation]
})

export class ListProjectComponent implements OnInit, AfterViewInit {
    @ViewChild('tbody')
    tbody: ElementRef;

    private projects: any[];
    constructor(private projectsService: ProjectsService, private router: Router) {
    }

    ngAfterViewInit() {
    }

    ngOnInit() {
        this.projectsService.getProjects(localStorage.getItem('currentUser'))
            .subscribe(data => {
                this.projects = data;
            });
    }

    addProject(): void {
        this.router.navigateByUrl('/projects/new');
    }

    viewProject(projectId): void {
        this.router.navigateByUrl('/projects/' + projectId);
    }
}
