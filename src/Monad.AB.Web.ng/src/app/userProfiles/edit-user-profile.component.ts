import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';

import { ApplicationUser } from './shared/user';
import { UsersService } from './shared/users.service';

@Component({
    selector: 'ms-edit-user-profile',
    templateUrl: './edit-user-profile.component.html',
    styleUrls: ['./edit-user-profile.component.scss']
})
export class EditUserProfileComponent implements OnInit {
    formGroup: FormGroup;
    @ViewChild('tbody')
    tbody: ElementRef;
    userName: string;
    user: ApplicationUser = new ApplicationUser();
    serverErrorMessage: string;

    constructor(
        private snackBar: MatSnackBar,
        private formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private usersService: UsersService) {
        this.formGroup = formBuilder.group({
            id: [''],
            userName: [''],
            firstName: ['', [Validators.required]],
            lastName: ['', [Validators.required]],
            emailAddress: ['', [Validators.required]],
            designation: [''],
            addressLine1: [''],
            addressLine2: [''],
            zip: [''],
            city: [''],
            state: [''],
        });
    }

    ngOnInit() {
        this.userName = sessionStorage.getItem('currentUser');

        this.usersService.getUserProfile(this.userName)
            .subscribe(
            user => {
                this.user = user;
                this.formGroup.controls['id'].setValue(this.user.id);
            },
            response => {
                if (response.status == 404) {
                    this.router.navigate(['NotFound']);
                }
            });
    }

    saveUser(data) {
        this.serverErrorMessage = '';
        this.usersService.editUserProfile(data)
            .subscribe(response => {
                if (response.statusCode == 204) {
                    let snackBarRef = this.snackBar.open('User Profile data saved Successfully!', 'Close', {
                        duration: 500
                    });
                    snackBarRef.afterDismissed().subscribe(() => {
                        this.router.navigateByUrl('/user-profile/view');
                    });

                } else if (response.statusCode == 412) {
                    this.serverErrorMessage = "Some details were missing!";
                } else {
                    this.serverErrorMessage = response.content;
                }
            });
    }

    cancelChanges(e) {
        this.router.navigateByUrl('/user-profile/view');
    }
}
