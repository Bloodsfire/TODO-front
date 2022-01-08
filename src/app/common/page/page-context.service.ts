import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

import { IPage } from '@app/common/page/page.interface';
import { PageContext } from '@app/common/page/page-context';

@Injectable({
  providedIn: 'root',
})
export class PageContextService {
  private readonly _pageContext$ = new ReplaySubject<PageContext>(1);

  public get pageContext$(): Observable<PageContext> {
    return this._pageContext$.asObservable();
  }

  public registerPage(page: IPage): void {
    const context = PageContext.fromPage(page);
    this._pageContext$.next(context);
  }
}
