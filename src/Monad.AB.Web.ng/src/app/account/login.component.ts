﻿import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { fadeInAnimation } from "../route.animation";
import { AccountService } from './shared/account.service';
import { LoginDetail } from './shared/account';

@Component({
    selector: 'ms-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    host: {
        '[@fadeInAnimation]': 'true'
    },
    animations: [fadeInAnimation]
})
export class LoginComponent implements OnInit {
    private loginDetail: LoginDetail = new LoginDetail();
    serverErrorMessage: string;
    constructor(
        private router: Router,
        private accountService: AccountService) {
    }

    ngOnInit() {
    }

    login() {
        this.accountService.login(this.loginDetail)
            .subscribe(response => {
                if (response.statusCode == 200) {
                    localStorage.setItem('currentUser', response.content.user.userName);
                    this.router.navigateByUrl('/projects');
                } else if (response.statusCode == 412) {
                    this.serverErrorMessage = "Invalid Credentials!";
                } else {
                    this.serverErrorMessage = response.content;
                }
            });
    }

}
