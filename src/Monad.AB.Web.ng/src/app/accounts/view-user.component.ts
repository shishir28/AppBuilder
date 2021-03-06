import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';

import { RoleViewModel } from '../roles/shared/role';
import { RolesService } from '../roles/shared/roles.service';
import { DialogService } from '../widgets/dialogs/dialog.service';
import { UserClaimsViewModel, UserEditViewModel } from './shared/account';
import { AccountsService } from './shared/accounts.service';


@Component({
  selector: 'ms-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})

export class ViewUserComponent implements OnInit {
  roles: RoleViewModel[];
  userForm: FormGroup;
  user: UserEditViewModel = new UserEditViewModel();
  serverErrorMessage: string;
  userClaims: UserClaimsViewModel[];
  userId: number;

  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private dialogService: DialogService,
    private rolesService: RolesService,
    private accountsService: AccountsService) {

    this.userForm = formBuilder.group({
      id: [''],
      userName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      addressLine1: ['', [Validators.required]],
      roleId: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    var id = this.route.params.subscribe(params => {
      var userGuid = params['userId'];
      if (!userGuid)
        return;

      this.accountsService.GetUser(userGuid)
        .subscribe(data => {
          this.user = data;
          this.userId = data.userId;

          this.userForm.controls['id'].setValue(data.id);
          this.rolesService.getRoles()
            .subscribe(roles => {
              this.roles = roles;
            });
          this.accountsService.getUserClaims(userGuid)
            .subscribe(userClaims => {
              this.userClaims = userClaims;
              console.log(this.userClaims);
            });

        });
    });
  }

  editUser(userId): void {
    this.router.navigateByUrl('/users/edit/' + userId);
  }

  cancelChanges(e) {
    this.router.navigateByUrl('/users');
  }
}
