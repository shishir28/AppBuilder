import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';

import { ConfirmDialog } from './dialog.component';

@Injectable()
export class DialogService {
    constructor(private dialog: MatDialog) { }
    public confirm(title: string, message: string): Observable<boolean> {
        let dialogRef = this.dialog.open(ConfirmDialog);
        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.message = message;
        return dialogRef.afterClosed();
    }
}
