import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { MatDialog } from '@angular/material';
import { ErrordialogueComponent } from './coupons/errordialogue/errordialogue.component';
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private matdialog: MatDialog) {}
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(catchError(err => {
      const msg = err.error.message;
      this.matdialog.open(ErrordialogueComponent, {data: {message: msg}});
      return throwError(err);
    }));
  }
}
