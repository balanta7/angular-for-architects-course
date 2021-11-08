import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CSRFInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    // return next.handle(req.clone()); // Remove this
    const setHeaders = { 'x-csrf-token': 'CIwNZNlR4XbisJF39I8yWnWX9wX4WFoz' };
    const clonedReq = req.clone({ setHeaders });

    console.log('I\'m creating a CSRF header');

    return next.handle(clonedReq);
  }
}
