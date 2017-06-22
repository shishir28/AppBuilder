import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'ms-toolbar-user-button',
    templateUrl: './toolbar-user-button.component.html',
    styleUrls: ['./toolbar-user-button.component.scss']
})
export class ToolbarUserButtonComponent implements OnInit {
    userName: string;
    isOpen: boolean;
    constructor(private router: Router, private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.userName = localStorage.getItem('currentUser');
    }

    toggleDropdown() {
        this.isOpen = !this.isOpen;
    }

    logout() {
        localStorage.removeItem('currentUser');
        //shishir need to call server side function 
        this.router.navigateByUrl('/login');
    }

    viewUserProfile() {
        this.router.navigateByUrl('/user-profile/view');
    }

    onClickOutside() {
        this.isOpen = false;
    }

}
