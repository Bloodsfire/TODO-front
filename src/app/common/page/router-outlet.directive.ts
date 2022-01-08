import { Directive, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { PageContextService } from '@app/common/page/page-context.service';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'router-outlet',
})
export class RouterOutletDirective implements OnDestroy {
  private readonly _destroy$ = new Subject<void>();

  constructor(
    private readonly routerOutlet: RouterOutlet,
    private readonly pageContextService: PageContextService
  ) {
    routerOutlet.activateEvents
      .pipe(takeUntil(this._destroy$))
      .subscribe((page) => pageContextService.registerPage(page));
  }

  public ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
