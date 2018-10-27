import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()

export class ProjectsService {
    options: RequestOptions;
    constructor(private http: Http) {
        this.options = new RequestOptions();
    }

    getProjects(userName): Observable<any[]> {
        let result: Observable<any[]>;
        let params = new URLSearchParams();
        params.set('userName', userName);
        let options = new RequestOptions({
            search: params
        });
        return this.http.get('/api/project/GetProjects', options)
        .pipe(map(this.extractData));
    }

    getProject(id) {
        return this.http.get("/api/project/GetProject?projectId=" + id)
        .pipe(map(res => res.json()));
    }

    addProject(project) {
        return this.http.post("/api/project/addproject/", JSON.stringify(project))
        .pipe(map(res => res.json()));
    }

    updateProject(project) {
        return this.http.put("/api/project/editproject/", JSON.stringify(project))
            .pipe(map(res => res.json()));
    }

    deleteProject(id) {
        return this.http.delete("/api/project/deleteproject?projectId=" + id)
            .pipe(map(res => res.json()));
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }
}
