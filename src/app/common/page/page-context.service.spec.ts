import { TestBed } from '@angular/core/testing';

import { PageContextService } from './page-context.service';
import { IPage } from '@app/common/page/page.interface';

describe('PageContextService', () => {
  let pageContextService: PageContextService;
  const mockPage: IPage = {
    pageTitle: 'Test Page Title',
    headerTitle: 'Test Header Title',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({});
    pageContextService = TestBed.inject(PageContextService);
  });

  describe('should emit new page context', () => {
    it('with correct page title', () => {
      pageContextService.pageContext$.subscribe((pageContext) =>
        expect(pageContext.pageTitle).toBe('Test Page Title')
      );
      pageContextService.registerPage(mockPage);
    });

    it('with correct header title', () => {
      pageContextService.pageContext$.subscribe((pageContext) =>
        expect(pageContext.headerTitle).toBe('Test Header Title')
      );
      pageContextService.registerPage(mockPage);
    });
  });
});
