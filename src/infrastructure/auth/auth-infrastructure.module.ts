import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
// import { AuthInterceptor } from '@app/infrastructure/auth/auth.interceptor';
import { RouterModule } from '@angular/router';

@NgModule({
  // declarations: [],
  // imports: [CommonModule, RouterModule],
  // providers: [
  //   {
  //     provide: HTTP_INTERCEPTORS,
  //     multi: true,
  //     useClass: AuthInterceptor,
  //   },
  // ],
})
export class AuthInfrastructureModule {}
