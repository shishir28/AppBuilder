import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';

import { DialogService } from '../widgets/dialogs/dialog.service';
import { UserViewModel } from './shared/account';
import { AccountsService } from './shared/accounts.service';

@Component({
    selector: 'ms-list-user',
    templateUrl: './list-user.component.html',
    styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

    serverErrorMessage: string;
    @ViewChild('tbody')
    tbody: ElementRef;
    private users: UserViewModel[];
    constructor(private router: Router,
        private route: ActivatedRoute,
        private snackBar: MatSnackBar,
        private dialogService: DialogService,
        private accountsService: AccountsService) {
    }

    ngOnInit() {
        this.accountsService.getAllUsers()
            .subscribe(data => {
                this.users = data;
            });
    }

    addUser(): void {
        this.router.navigateByUrl('/users/new');
    }

    viewUser(userId): void {
        this.router.navigateByUrl('/users/' + userId);
    }

    editUser(userId): void {
        this.router.navigateByUrl('/users/edit/' + userId);
    }

}
