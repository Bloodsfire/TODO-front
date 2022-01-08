import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutletDirective } from './router-outlet.directive';

@NgModule({
  declarations: [RouterOutletDirective],
  imports: [CommonModule],
  exports: [RouterOutletDirective],
})
export class PageModule {}
