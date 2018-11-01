import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { Http, Response,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import { RoleRightsViewModel, UpdateRoleRightsViewModel } from './role';

@Injectable()

export class RolesService {
    options: RequestOptions;
    constructor(private http: Http, private location: Location) {
        // this.options = new RequestOptions();
    }

 
    getRoles(): Observable<any[]> {
        return this.http.get("/api/role/GetAllRoles")
        .pipe(map(res => res.json()));
                         
    }

    getRole(id) {
        return this.http.get("/api/role/GetRoleById?roleId="+ id)
        .pipe(map(res => res.json()));

        
    }

    addRole(role) {
        return this.http.post("/api/role/addrole/", JSON.stringify(role))
        .pipe(map(res => res.json()));
    }

    updateRole(role) {
        return this.http.put("/api/role/addrole/", JSON.stringify(role))
        .pipe(map(res => res.json()));
    }

    getRolePermission(roleName): Observable<any[]> {
        return this.http.get("/api/role/GetRolePermissions?roleName="+ roleName)
        .pipe(map(res => res.json()));
        
    }

    saveRolePermission(roleId, rolePermissions: RoleRightsViewModel[]) {
        let data = new UpdateRoleRightsViewModel();
        data.applicationRoleId = roleId;
        data.roleRights = rolePermissions;
        return this.http.put("/api/role/UpdateRoleRights", JSON.stringify(data))
        .pipe(map(res => res.json()));
    
    }
}
