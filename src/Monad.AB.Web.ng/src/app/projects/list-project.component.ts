import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { routeAnimation } from "../route.animation";
import { MdDialog, MdDialogRef } from '@angular/material';

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
    dialogRef: MdDialogRef<DemoDialog>;
    @ViewChild('tbody')
    tbody: ElementRef;
    cellWidths = [];
    tableHover: boolean = true;
    tableStriped: boolean = true;
    tableCondensed: boolean = true;
    tableBordered: boolean;
    private projects: any[];
    constructor(private projectsService: ProjectsService, private router: Router, private dialog: MdDialog) {
    }

    ngAfterViewInit() {
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
        this.dialogRef = this.dialog.open(DemoDialog, {
            disableClose: false
        });
        this.dialogRef.afterClosed().subscribe(result => {
            if (result == 'Yes') {
                this.projectsService.deleteProject(projectId)
                    .subscribe(response => {
                        alert(response.statusCode);
                        if (response.statusCode == 204) {
                            this.projectsService.getProjects('a@b.com')
                                .subscribe(data => {
                                    this.projects = data;
                                });
                        } else if (response.statusCode == 412) {
                            //  this.serverErrorMessage = "Some details were missing!";
                        } else {
                            // this.serverErrorMessage = response.content;
                        }
                    });
            }
            this.dialogRef = null;
        });
    }
}

@Component({
    selector: 'ms-demo-dialog',
    template: `<h1>Would you like to delete Project?</h1>
  <md-dialog-actions align="end">
    <button md-button (click)="dialogRef.close('No')">No</button>
    <button md-button color="primary" (click)="dialogRef.close('Yes')">Yes</button>
  </md-dialog-actions>`
})
export class DemoDialog {
    constructor(public dialogRef: MdDialogRef<DemoDialog>) { }
}
