import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, finalize } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class LogResponseTimeInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const started = Date.now();
    let ok: string;

    return next.handle(req).pipe(
      tap(    
        (event) => {
          console.log('Setting the \'ok\' variable in case of HttpResponse event.');

          return (ok = event instanceof HttpResponse ? 'succeeded' : '');
        },
        (error) => { 
          console.error(error);
          
          return (ok = 'failed'); 
        }
      ),
      finalize(() => {
        const finished = Date.now();
        const elapsedTime = finished - started;

        console.log(req.method);
        console.log(req.params);
        console.log(elapsedTime + ' ms');
        console.log('The request was executed with ' + ok);
      })
    );
  }
}
