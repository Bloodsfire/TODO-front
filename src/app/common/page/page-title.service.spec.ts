import { TestBed } from '@angular/core/testing';

import { PageTitleService } from './page-title.service';
import { Title } from '@angular/platform-browser';
import { Subject } from 'rxjs';
import { PageContext } from '@app/common/page/page-context';
import { PageContextService } from '@app/common/page/page-context.service';

describe('PageTitleService', () => {
  let pageTitleService: PageTitleService;
  let mockTitleService: Title;
  let mockPageContext$: Subject<PageContext>;

  beforeEach(() => {
    mockPageContext$ = new Subject<PageContext>();
    TestBed.configureTestingModule({
      providers: [
        {
          provide: Title,
          useValue: {
            setTitle: jest.fn(),
          },
        },
        {
          provide: PageContextService,
          useValue: {
            pageContext$: mockPageContext$.asObservable(),
          },
        },
      ],
    });
    pageTitleService = TestBed.inject(PageTitleService);
    mockTitleService = TestBed.inject(Title);
    TestBed.inject(PageContextService);
  });

  describe('should set correct page title from page context', () => {
    it('with non-empty value', () => {
      const pageTitleSpy = jest.spyOn(mockTitleService, 'setTitle');
      mockPageContext$.next(new PageContext('Test Page Title', 'test'));
      expect(pageTitleSpy).toHaveBeenCalledWith('Test Page Title | TODO');
    });

    it('with empty value', () => {
      const pageTitleSpy = jest.spyOn(mockTitleService, 'setTitle');
      mockPageContext$.next(new PageContext('', 'test'));
      expect(pageTitleSpy).toHaveBeenCalledWith('TODO');
    });
  });

  describe('should set correct page title imperatively', () => {
    it('with non-empty value', () => {
      const pageTitleSpy = jest.spyOn(mockTitleService, 'setTitle');
      pageTitleService.setPageTitle('Test Page Title');
      expect(pageTitleSpy).toHaveBeenCalledWith('Test Page Title | TODO');
    });

    it('with empty value', () => {
      const pageTitleSpy = jest.spyOn(mockTitleService, 'setTitle');
      pageTitleService.setPageTitle('');
      expect(pageTitleSpy).toHaveBeenCalledWith('TODO');
    });
  });
});
