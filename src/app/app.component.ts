import { Component } from '@angular/core';
import { PageTitleService } from '@app/common/page/page-title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private readonly pageTitleService: PageTitleService) {
    pageTitleService.setPageTitle('');
  }
}
