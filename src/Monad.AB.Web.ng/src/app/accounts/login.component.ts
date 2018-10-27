import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { fadeInAnimation } from '../route.animation';
import { LoginDetail } from './shared/account';
import { AccountsService } from './shared/accounts.service';

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
        private accountsService: AccountsService) {
    }

    ngOnInit() {
    }

    login() {
        this.accountsService.login(this.loginDetail)
            .subscribe(response => {
                if (response.statusCode == 200) {
                    
                    
                    sessionStorage.setItem('currentUser', response.content.user.userName);
                    sessionStorage.setItem('isCurrentUserAuthenticated', response.content.authenticated);
                    sessionStorage.setItem('currentUserToken', response.content.token);
                    sessionStorage.setItem('accessRights', JSON.stringify(response.content.claims));
                    this.router.navigateByUrl('/projects');
                } else if (response.statusCode == 412) {
                    this.serverErrorMessage = "Invalid Credentials!";
                } else {
                    this.serverErrorMessage = response.content;
                }
            });
    }
}
