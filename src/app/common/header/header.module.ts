import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header.component';
import { HeaderContainer } from '@app/common/header/header.container';

@NgModule({
  declarations: [HeaderComponent, HeaderContainer],
  exports: [HeaderContainer],
  imports: [CommonModule, RouterModule],
})
export class HeaderModule {}
