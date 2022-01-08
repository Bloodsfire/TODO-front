import { IPage } from '@app/common/page/page.interface';

export class PageContext {
  constructor(
    public readonly pageTitle: string,
    public readonly headerTitle: string
  ) {}

  public static fromPage(page: IPage): PageContext {
    return new PageContext(page.pageTitle, page.headerTitle);
  }
}
