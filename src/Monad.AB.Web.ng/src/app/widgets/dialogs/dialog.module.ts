import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatDialogModule } from '@angular/material';

import { ConfirmDialog } from './dialog.component';
import { DialogService } from './dialog.service';

@NgModule({
    imports: [
        CommonModule,
        MatDialogModule,
        MatButtonModule
    ],
    declarations: [
        ConfirmDialog
    ],
    exports: [
        ConfirmDialog
    ],
    entryComponents: [
        ConfirmDialog
    ],
    providers: [
        DialogService
    ]
})
export class DialogModule { }
