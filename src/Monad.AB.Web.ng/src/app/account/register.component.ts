import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from "../route.animation";
import { Router } from "@angular/router";
import { AccountService } from './shared/account.service';
import { RegisterDetail } from './shared/account';

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
        private accountService: AccountService) {
    }

    ngOnInit() {
    }

    register() {
        this.accountService.register(this.registerDetail)
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
