import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MdSnackBar } from "@angular/material";
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
        private snackBar: MdSnackBar,
        private dialogService: DialogService,
        private accountsService: AccountsService) {
    }

    ngOnInit() {
        console.log('On Init');
        this.accountsService.getAllUsers()
            .subscribe(data => {
                this.users = data;
            });
    }

    // addRole(): void {
    //     this.router.navigateByUrl('/roles/new');
    // }


    // viewRole(roleId): void {
    //     this.router.navigateByUrl('/roles/' + roleId);
    // }

    // editRole(roleId): void {
    //     this.router.navigateByUrl('/roles/edit/' + roleId);
    // }

}
