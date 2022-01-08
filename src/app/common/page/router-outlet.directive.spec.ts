import { TestBed } from '@angular/core/testing';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
} from '@angular/core';
import { RouterOutletDirective } from '@app/common/page/router-outlet.directive';
import { RouterOutlet } from '@angular/router';
import { PageContextService } from '@app/common/page/page-context.service';
import { IPage } from '@app/common/page/page.interface';

@Component({
  selector: 'app-test-component',
  template: '<router-outlet></router-outlet>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
class TestComponent {}

describe('RouterOutletDirective', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, RouterOutletDirective],
      providers: [
        {
          provide: RouterOutlet,
          useValue: {
            activateEvents: new EventEmitter<IPage>(),
          },
        },
        {
          provide: PageContextService,
          useValue: {
            registerPage: jest.fn(),
          },
        },
      ],
    });
  });

  it('should register page on route activation', () => {
    const mockPage: IPage = {
      pageTitle: 'Test',
      headerTitle: 'Test',
    };
    const mockOriginalRouterOutlet = TestBed.inject(RouterOutlet);
    const mockPageContextService = TestBed.inject(PageContextService);
    const spyRegisterPage = jest.spyOn(mockPageContextService, 'registerPage');
    TestBed.createComponent(TestComponent);
    mockOriginalRouterOutlet.activateEvents.emit(mockPage);
    expect(spyRegisterPage).toHaveBeenCalledWith(mockPage);
  });
});
