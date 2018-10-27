import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { fadeInAnimation } from '../route.animation';

@Component({
  selector: 'ms-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  host: {
      '[@fadeInAnimation]': 'true'
  },
  animations: [fadeInAnimation]
})
export class ForgotPasswordComponent implements OnInit {

    userName: string;
    password: string;

    constructor(
        private router: Router
    ) { }

    ngOnInit() {
    }

    forgotPassword() {
        this.router.navigate(['/']);
    }

}
