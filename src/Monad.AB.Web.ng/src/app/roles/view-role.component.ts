import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MdSnackBar } from "@angular/material";
import { DialogService } from '../widgets/dialogs/dialog.service';

import { RolesService } from './shared/roles.service';
import { RoleViewModel, RoleRightsViewModel } from './shared/role';

@Component({
    selector: 'ms-view-role',
    templateUrl: './view-role.component.html',
    styleUrls: ['./view-role.component.scss']
})
export class ViewRoleComponent implements OnInit {
    rolePermissions: RoleRightsViewModel[];
    role: RoleViewModel = new RoleViewModel();
    serverErrorMessage: string;
    roleId: string;
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private snackBar: MdSnackBar,
        private dialogService: DialogService,
        private rolesService: RolesService) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.roleId = params['roleid'];
            if (!this.roleId)
                return;

            this.rolesService.getRole(this.roleId)
                .subscribe(
                role => {
                    this.role = role;
                    this.rolesService.getRolePermission(this.role.name)
                        .subscribe(permissions => {
                            this.rolePermissions = permissions;
                        });
                },
                response => {
                    if (response.status == 404) {
                        this.router.navigate(['NotFound']);
                    }
                });
        });
    }

    saveChanges(roleId): void {
        if (!this.roleId)
            return;

        this.rolesService.saveRolePermission(this.role.roleId, this.rolePermissions)
            .subscribe(
            response => {                
                if (response.statusCode == 204) {
                    let snackBarRef = this.snackBar.open('Role Rights information saved Successfully!', 'Close', {
                        duration: 500
                    });
                    snackBarRef.afterDismissed().subscribe(() => {
                        this.router.navigateByUrl('/roles');
                    });
                } else {
                    this.serverErrorMessage = response.content;
                }
            });
    }

    cancelChanges(e) {
        this.router.navigateByUrl('/roles');
    }
}
