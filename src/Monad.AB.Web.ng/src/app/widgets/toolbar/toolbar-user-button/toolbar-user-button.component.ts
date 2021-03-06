import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { LogoutDetail } from '../../../accounts/shared/account';
import { AccountsService } from '../../../accounts/shared/accounts.service';

@Component({
    selector: 'ms-toolbar-user-button',
    templateUrl: './toolbar-user-button.component.html',
    styleUrls: ['./toolbar-user-button.component.scss']
})
export class ToolbarUserButtonComponent implements OnInit {
    userName: string;
    isOpen: boolean;
    logoutDetail: LogoutDetail = new LogoutDetail();
    constructor(private router: Router, private route: ActivatedRoute, private accountService: AccountsService) {

    }

    ngOnInit() {
        this.userName = sessionStorage.getItem('currentUser');
    }

    toggleDropdown() {
        this.isOpen = !this.isOpen;
    }

    logout() {
        this.logoutDetail.UserName = this.userName;
        this.accountService.logout(this.logoutDetail)
            .subscribe(response => {
                if (response.statusCode == 200) {
                    sessionStorage.removeItem('currentUser');
                    sessionStorage.removeItem('currentUserToken');
                    sessionStorage.removeItem('isCurrentUserAuthenticated');
                    this.router.navigateByUrl('/login');
                }
            });
    }

    viewUserProfile() {
        this.router.navigateByUrl('/user-profile/view');
    }

    onClickOutside() {
        this.isOpen = false;
    }

}
