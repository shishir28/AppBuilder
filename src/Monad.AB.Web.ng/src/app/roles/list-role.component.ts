import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MdSnackBar } from "@angular/material";
import { DialogService } from '../widgets/dialogs/dialog.service';
import { RolesService } from './shared/roles.service';
import { RoleViewModel } from './shared/role';


@Component({
    selector: 'ms-list-role',
    templateUrl: './list-role.component.html',
    styleUrls: ['./list-role.component.scss']
})
export class ListRoleComponent implements OnInit {
    serverErrorMessage: string;
    @ViewChild('tbody')
    tbody: ElementRef;
    private roles: RoleViewModel[];
    constructor(private router: Router,
        private route: ActivatedRoute,
        private snackBar: MdSnackBar,
        private dialogService: DialogService,
        private rolesService: RolesService) {
    }

    ngOnInit() {
        console.log('On Init');
        this.rolesService.getRoles()
            .subscribe(data => {
                this.roles = data;
            });
    }

    addRole(): void {
        this.router.navigateByUrl('/roles/new');
    }


    viewRole(roleId): void {
        this.router.navigateByUrl('/roles/' + roleId);
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

    

}
