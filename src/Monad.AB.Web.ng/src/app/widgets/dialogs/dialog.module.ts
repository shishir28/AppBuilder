import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdDialogModule, MdButtonModule } from '@angular/material';

import { DialogService } from './dialog.service';
import { ConfirmDialog } from './dialog.component';

@NgModule({
    imports: [
        CommonModule,
        MdDialogModule,
        MdButtonModule
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
