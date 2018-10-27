import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from "@angular/material";
import { DialogService } from '../widgets/dialogs/dialog.service';
import { AccountsService } from './shared/accounts.service';
import { RolesService } from '../roles/shared/roles.service'

import { UserEditViewModel, UserClaimsViewModel } from './shared/account';
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


  saveUser(data) {
    this.serverErrorMessage = '';
    data.userId = this.userId;; // int value for application database        
    //-- this form will be used by admin so generally he or she will not worry about mopst of the demographic details 
    // --so copy the data retrieved duing pull to data being posted 
    data.addressLine2 = this.user.addressLine2;
    data.city = this.user.city;
    data.state = this.user.state;    
    data.zip = this.user.zip;
    data.isEnabled = this.user.isEnabled;
    data.gender = this.user.gender;
    data.phoneNumber = this.user.phoneNumber;
    data.fullName = this.user.fullName;
    data.userText = this.user.userText;
    data.lastModifiedBy = this.user.lastModifiedBy;
    data.lastModifiedDateUtc = this.user.lastModifiedDateUtc;
    //--- 
    this.accountsService.editUser(data)
      .subscribe(response => {
        if (response.statusCode == 204) {
          this.accountsService.saveUserClains(data.id, this.userClaims)
            .subscribe(
            resp => {
              if (resp.statusCode == 204) {
                let snackBarRef = this.snackBar.open('User Updated Successfully!', 'Close', {
                  duration: 1000
                });
                snackBarRef.afterDismissed().subscribe(() => {
                  this.router.navigateByUrl('/users');
                });
              } else {
                this.serverErrorMessage = resp.content;
              }
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
