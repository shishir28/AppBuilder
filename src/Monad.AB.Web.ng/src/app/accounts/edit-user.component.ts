import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MdSnackBar } from "@angular/material";
import { DialogService } from '../widgets/dialogs/dialog.service';
import { AccountsService } from './shared/accounts.service';
import { RolesService } from '../roles/shared/roles.service'

import { UserEditViewModel,UserClaimsViewModel } from './shared/account';
import { RoleViewModel } from '../roles/shared/role';

@Component({
  selector: 'ms-edit-user', 
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})

export class EditUserComponent implements OnInit {
  roles: RoleViewModel[];
  userForm: FormGroup;
  user: UserEditViewModel = new UserEditViewModel();
  serverErrorMessage: string;
  userClaims:UserClaimsViewModel[];
  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private snackBar: MdSnackBar,
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
      var userId = params['userId'];
      if (!userId)
        return;
        
      
      this.accountsService.GetUser(userId)
        .subscribe(data => {
          this.user = data;
        
          this.rolesService.getRoles()
            .subscribe(roles => {
              this.roles = roles;
            });
         this.accountsService.getUserClaims(userId)
                        .subscribe(userClaims => {
                            this.userClaims = userClaims;
                            console.log(this.userClaims);
                        });

        });
    });
  }


  saveUser(data) {
    this.serverErrorMessage = '';
    this.accountsService.editUser(data)
      .subscribe(response => {
        if (response.statusCode == 201) {
          let snackBarRef = this.snackBar.open('User Updated Successfully!', 'Close', {
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
