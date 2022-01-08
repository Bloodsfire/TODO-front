import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageModule } from '@app/common/page/page.module';
import { LayoutModule } from '@app/common/layout/layout.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, PageModule, LayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
