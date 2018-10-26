import { Http, URLSearchParams, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs'
import { RoleViewModel, RoleRightsViewModel, UpdateRoleRightsViewModel } from './role';

@Injectable()

export class RolesService {
    options: RequestOptions;
    constructor(private http: Http) {
        this.options = new RequestOptions();
    }

    getRoles(): Observable<any[]> {
        return this.http.get('/api/role/GetAllRoles')
            .map(res => res.json());
    }

    getRole(id) {
        return this.http.get("/api/role/GetRoleById?roleId=" + id)
            .map(res => res.json());
    }

    addRole(role) {
        return this.http.post("/api/role/addrole/", JSON.stringify(role))
            .map(res => res.json());
    }

    updateRole(role) {
        return this.http.put("/api/role/editrole/", JSON.stringify(role))
            .map(res => res.json());
    }

    getRolePermission(roleName): Observable<any[]> {
        return this.http.get('/api/role/GetRolePermissions?roleName=' + roleName)
            .map(res => res.json());
    }

    saveRolePermission(roleId, rolePermissions: RoleRightsViewModel[]) {
        let data = new UpdateRoleRightsViewModel();
        data.applicationRoleId = roleId;
        data.roleRights = rolePermissions;
        return this.http.put('/api/role/UpdateRoleRights', JSON.stringify(data))
            .map(res => res.json());
    }
}
