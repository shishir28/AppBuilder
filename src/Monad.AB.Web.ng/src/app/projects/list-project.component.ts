import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { routeAnimation } from "../route.animation";
declare let ResizeSensor;

import { ProjectsService } from './shared/projects.service';
@Component({
    selector: 'app-list-project',
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

    cellWidths = [];

    tableHover: boolean = true;
    tableStriped: boolean = true;
    tableCondensed: boolean = true;
    tableBordered: boolean;
    private projects: any[];
    constructor(private projectsService: ProjectsService, private router: Router ) {
    }

    ngAfterViewInit() {
        //let cells = this.tbody.nativeElement.children[0].children;

        //for (let cell of cells) {
        //    this.cellWidths.push(cell.offsetWidth);
        //}

        //let resizeSensor = new ResizeSensor(this.tbody.nativeElement, () => {
        //    this.cellWidths.length = 0;

        //    for (let cell of cells) {
        //        this.cellWidths.push(cell.offsetWidth);
        //    }
        //});
    }

    ngOnInit() {
        this.projectsService.getProjects('a@b.com')
            .subscribe(data => {
                this.projects = data;
            });
    }
    viewProject(projectId): void {
        this.router.navigateByUrl('/projects/' + projectId);
    }

    editProject(projectId): void {
        this.router.navigateByUrl('projects/edit/' + projectId);
    }

    deleteProject(projectId): void {
        console.log(projectId + ' Deleted');
    }

}
