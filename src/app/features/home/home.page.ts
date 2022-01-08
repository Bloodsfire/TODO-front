import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IPage } from '@app/common/page/page.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage implements IPage {
  public readonly headerTitle = 'Home';
  public readonly pageTitle = 'Home';
}
