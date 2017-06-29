import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MdSnackBar } from "@angular/material";
import { RolesService } from './shared/roles.service';
import { AddRoleViewModel } from './shared/role';


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

    constructor(private snackBar: MdSnackBar,
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
