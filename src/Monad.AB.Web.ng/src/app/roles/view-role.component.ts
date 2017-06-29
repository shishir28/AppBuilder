import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MdSnackBar } from "@angular/material";
import { DialogService } from '../widgets/dialogs/dialog.service';

import { RolesService } from './shared/roles.service';
import { RoleViewModel } from './shared/role';

@Component({
    selector: 'ms-view-role',
    templateUrl: './view-role.component.html',
    styleUrls: ['./view-role.component.scss']
})
export class ViewRoleComponent implements OnInit {
    formGroup: FormGroup;
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
                },
                response => {
                    if (response.status == 404) {
                        this.router.navigate(['NotFound']);
                    }
                });
        });
    }

    editRole(roleId): void {
        this.router.navigateByUrl('/roles/edit/' + roleId);
    }

    deleteRole(roleId): void {
        this.dialogService.confirm('Delete Role', 'Are you sure want to delete this role?')
            .subscribe(result => {
                let res: any = result;
                if (res == 'yes') {
                    this.rolesService.deleteRole(roleId)
                        .subscribe(response => {
                            if (response.statusCode == 204) {
                                let snackBarRef = this.snackBar.open('Role deleted Successfully!', 'Close', {
                                    duration: 500
                                });
                                snackBarRef.afterDismissed().subscribe(() => {
                                    this.router.navigateByUrl('/roles');
                                });

                            } else if (response.statusCode == 412) {
                                this.serverErrorMessage = "Some details were missing!";
                            } else {
                                this.serverErrorMessage = response.content;
                            }
                        });
                }
            });
    }

    cancelChanges(e) {
        this.router.navigateByUrl('/roles');
    }
}
