import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from './shared/users.service';
import { ApplicationUser } from './shared/user';

@Component({
    selector: 'ms-edit-user-profile',
    templateUrl: './view-user-profile.component.html',
    styleUrls: ['./view-user-profile.component.scss']
})
export class ViewUserProfileComponent implements OnInit, AfterViewInit {
    @ViewChild('tbody')
    tbody: ElementRef;
    userName: string;
    user: ApplicationUser = new ApplicationUser();
    constructor(
        private location: Location,
        private formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private usersService: UsersService) {
    }

    ngOnInit() {
        this.userName = sessionStorage.getItem('currentUser');

        this.usersService.getUserProfile(this.userName)
            .subscribe(
            user => {
                this.user = user;
            },
            response => {
                if (response.status == 404) {
                    this.router.navigate(['NotFound']);
                }
            });
    }

    ngAfterViewInit() {
    }


    editUserProfile() {
        this.router.navigateByUrl('/user-profile/edit');
    }

    cancelChanges(e) {
        this.location.back();
    }
}
