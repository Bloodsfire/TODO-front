import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.container.html',
  styleUrls: ['./layout.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutContainer {}
