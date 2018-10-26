import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from "@angular/material";
import { DialogService } from '../widgets/dialogs/dialog.service';
import { AccountsService } from './shared/accounts.service';
import { UserViewModel } from './shared/account';

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
