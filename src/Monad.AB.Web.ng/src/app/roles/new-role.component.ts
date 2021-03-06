import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';

import { AddRoleViewModel } from './shared/role';
import { RolesService } from './shared/roles.service';

@Component({
    selector: 'ms-new-role',
    templateUrl: './new-role.component.html',
    styleUrls: ['./new-role.component.scss']
})
export class NewRoleComponent implements OnInit {
    formGroup: FormGroup;
    role: AddRoleViewModel = new AddRoleViewModel();
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
            if (this.roleId)
                return;
        });
    }

    saveRole(data) {
        this.serverErrorMessage = '';
        this.rolesService.addRole(data)
            .subscribe(response => {
                if (response.statusCode == 201) {
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
