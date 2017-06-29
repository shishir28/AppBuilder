import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
 ElementAccessDirective
} from '../widgets/element-access.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ElementAccessDirective],
  exports: [
      ElementAccessDirective
  ]
})
export class SharedComponentsModule { }
