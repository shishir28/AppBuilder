import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from './shared/users.service';
//import { RegisterDetail } from './shared/account';

@Component({
    selector: 'ms-edit-user-profile',
    templateUrl: './view-user-profile.component.html',
    styleUrls: ['./view-user-profile.component.scss']
})
export class ViewUserProfileComponent implements OnInit, AfterViewInit {
    @ViewChild('tbody')
    tbody: ElementRef;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private usersService: UsersService) {
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
    }
    editUserProfile() {
        this.router.navigateByUrl('/user-profile/edit');

    }
}
