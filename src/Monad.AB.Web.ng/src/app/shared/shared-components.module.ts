import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ElementAccessDirective } from '../widgets/element-access.directive';

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
