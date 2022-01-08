import { PageContext } from './page-context';
import { IPage } from '@app/common/page/page.interface';

describe('PageContext', () => {
  it('should create an instance with constructor', () => {
    expect(
      new PageContext('Test Page Title', 'Test Header Title')
    ).toBeTruthy();
  });

  describe('should create an instance from page', () => {
    const mockPage: IPage = {
      pageTitle: 'Test Page Title',
      headerTitle: 'Test Header Title',
    };

    it('with correct page title', () => {
      const pageContext = PageContext.fromPage(mockPage);
      expect(pageContext.pageTitle).toBe('Test Page Title');
    });

    it('with correct header title', () => {
      const pageContext = PageContext.fromPage(mockPage);
      expect(pageContext.headerTitle).toBe('Test Header Title');
    });
  });
});
