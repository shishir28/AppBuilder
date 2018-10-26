import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from "@angular/material";
import { RolesService } from './shared/roles.service';
import { RoleViewModel } from './shared/role';


@Component({
    selector: 'ms-edit-role',
    templateUrl: './edit-role.component.html',
    styleUrls: ['./edit-role.component.scss']
})
export class EditRoleComponent implements OnInit {
    formGroup: FormGroup;
    role: RoleViewModel = new RoleViewModel();
    serverErrorMessage: string;

    roleId: string;
    constructor(private snackBar: MatSnackBar,
        private formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private rolesService: RolesService) {
        this.formGroup = formBuilder.group({
            id: [''],
            name: ['', [Validators.required]],
            description: [''],
            isActive: [''],
        });
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
                    this.formGroup.controls['id'].setValue(this.roleId);
                },
                response => {
                    if (response.status == 404) {
                        this.router.navigate(['NotFound']);
                    }
                });
        });
    }
    saveRole(data) {
        this.serverErrorMessage = '';
        data.roleId = this.roleId;
        this.rolesService.updateRole(data)
            .subscribe(response => {
                if (response.statusCode == 204) {
                    let snackBarRef = this.snackBar.open('Role saved Successfully!', 'Close', {
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

    cancelChanges(e) {
        this.router.navigateByUrl('/roles');
    }
}
