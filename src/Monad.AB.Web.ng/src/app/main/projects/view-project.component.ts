import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
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
    tableHover: boolean = true;
    tableStriped: boolean = true;
    tableCondensed: boolean = true;
    tableBordered: boolean;
    @ViewChild('tbody')
    tbody: ElementRef;

    constructor(private router: Router, private route: ActivatedRoute,
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
        //console.log(this.tbody.nativeElement.children);
        //console.log(this.tbody.nativeElement.children.length);
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


    editProject(projectId): void {
        this.router.navigateByUrl('/projects/edit/' + projectId);
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
        // to do 
    }

    cancelChanges(e) {
        this.router.navigateByUrl('/projects');
    }
}