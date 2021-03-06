import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';

import { RoleViewModel } from '../roles/shared/role';
import { RolesService } from '../roles/shared/roles.service';
import { DialogService } from '../widgets/dialogs/dialog.service';
import { AddUserViewModel } from './shared/account';
import { AccountsService } from './shared/accounts.service';

@Component({
  selector: 'ms-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {
  roles: RoleViewModel[];
  userForm: FormGroup;
  user: AddUserViewModel = new AddUserViewModel();
  serverErrorMessage: string;
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
      var userid = params['userid'];
      if (userid)
        return;
      this.rolesService.getRoles()
        .subscribe(data => {
          this.roles = data;
          console.log(data);
        });
    });
  }


  saveUser(data) {
    this.serverErrorMessage = '';
    this.accountsService.addUser(data)
      .subscribe(response => {
        if (response.statusCode == 201) {
          let snackBarRef = this.snackBar.open('User created Successfully!', 'Close', {
            duration: 500
          });
          snackBarRef.afterDismissed().subscribe(() => {
            this.router.navigateByUrl('/users');
          });

        } else if (response.statusCode == 412) {
          this.serverErrorMessage = "Some details were missing!";
        } else {
          this.serverErrorMessage = response.content;
        }
      });
  }

  cancelChanges(e) {
    this.router.navigateByUrl('/users');
  }

}
