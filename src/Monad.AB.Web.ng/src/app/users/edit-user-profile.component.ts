import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from './shared/users.service';
import { ApplicationUser } from './shared/user';

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

    constructor(
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
        this.userName = localStorage.getItem('currentUser');

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

    saveForm(data) {
    }

    cancelChanges(e) {
        this.router.navigateByUrl('/user-profile/view');
    }

}
