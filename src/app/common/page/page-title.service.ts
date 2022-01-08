import { Injectable, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

import { PageContextService } from '@app/common/page/page-context.service';

@Injectable({
  providedIn: 'root',
})
export class PageTitleService implements OnDestroy {
  private readonly _destroy$ = new Subject<void>();

  constructor(
    private readonly title: Title,
    private readonly pageContextService: PageContextService
  ) {
    pageContextService.pageContext$
      .pipe(
        map((pageContext) => pageContext.pageTitle),
        takeUntil(this._destroy$)
      )
      .subscribe((pageTitle) => this.setPageTitle(pageTitle));
  }

  public setPageTitle(pageTitle: string): void {
    if (pageTitle) {
      this.title.setTitle(`${pageTitle} | TODO`);
    } else {
      this.title.setTitle('TODO');
    }
  }

  public ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
