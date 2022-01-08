import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderModule } from '@app/common/header/header.module';
import { LayoutContainer } from './layout.container';
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [LayoutContainer, LayoutComponent],
  imports: [CommonModule, HeaderModule],
  exports: [LayoutContainer],
})
export class LayoutModule {}
