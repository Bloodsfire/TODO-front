import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { PageContextService } from '@app/common/page/page-context.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.container.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderContainer {
  public title$: Observable<string>;

  constructor(private readonly pageContextService: PageContextService) {
    this.title$ = this.pageContextService.pageContext$.pipe(
      map((context) => context.headerTitle)
    );
  }
}
