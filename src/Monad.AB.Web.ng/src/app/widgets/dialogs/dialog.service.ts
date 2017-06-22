﻿import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import { MdDialogModule, MdButtonModule } from '@angular/material';
import { ConfirmDialog } from './dialog.component';

@Injectable()
export class DialogService {
    constructor(private dialog: MdDialog) { }
    public confirm(title: string, message: string): Observable<boolean> {
        let dialogRef = this.dialog.open(ConfirmDialog);
        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.message = message;
        return dialogRef.afterClosed();
    }
}
