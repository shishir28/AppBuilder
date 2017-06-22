import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
@Component({
    selector: 'ms-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.scss']
})
export class ConfirmDialog implements OnInit {
    public title: string;
    public message: string;
    constructor(public dialogRef: MdDialogRef<ConfirmDialog>) { }
    ngOnInit() {
    }
}
