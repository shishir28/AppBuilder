import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { fadeInAnimation } from '../route.animation';
import { RegisterDetail } from './shared/account';
import { AccountsService } from './shared/accounts.service';

@Component({
    selector: 'ms-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
    host: {
        '[@fadeInAnimation]': 'true'
    },
    animations: [fadeInAnimation]
})
export class RegisterComponent implements OnInit {
    private registerDetail: RegisterDetail = new RegisterDetail();
    serverErrorMessage: string;
    constructor(
        private router: Router,
        private accountsService: AccountsService) {
    }

    ngOnInit() {
    }

    register() {
        this.accountsService.register(this.registerDetail)
            .subscribe(response => {
                console.log(response);
                if (response.statusCode == 201) {
                    this.router.navigate(['/login']);
                } else if (response.statusCode == 412) {
                    this.serverErrorMessage = "Some details were missing!";
                } else {
                    this.serverErrorMessage = response.content;
                }
            });
        //this.router.navigate(['/']);
    }
}
