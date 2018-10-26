import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, MatButtonModule } from '@angular/material';

import { DialogService } from './dialog.service';
import { ConfirmDialog } from './dialog.component';

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
