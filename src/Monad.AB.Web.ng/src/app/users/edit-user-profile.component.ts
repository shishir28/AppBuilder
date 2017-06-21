import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from './shared/users.service';
//import { RegisterDetail } from './shared/account';


@Component({
    selector: 'ms-edit-user-profile',
    templateUrl: './edit-user-profile.component.html',
    styleUrls: ['./edit-user-profile.component.scss']
})
export class EditUserProfileComponent implements OnInit {
    formGroup: FormGroup;
    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private usersService: UsersService) {

        this.formGroup = formBuilder.group({
            id: ['']

        });
    }

    ngOnInit() {
    }
    saveForm(data) {
    }


}
