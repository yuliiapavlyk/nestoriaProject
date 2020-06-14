import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';

import  { items } from '../fake/fakeData';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

export class FakeBackendInterceptor implements HttpInterceptor {

   // console.log('HTTP REQUEST INTERCEPTED BY THE MOCKED BACKEND');
    //return of(new HttpResponse({body: products}));}


    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      console.log("blabla");
      const { url, method, headers, body } = request;

      // wrap in delayed observable to simulate server api call
      return of(null)
      .pipe(mergeMap(handleRoute))
      .pipe(materialize())
      .pipe(delay(500))
      .pipe(dematerialize());

      function handleRoute() {
          switch (true) {
              case url.endsWith('/items') && method === 'GET':
                  return getAllItems();
              case url.match(/\/item\/\d+$/) && method === 'GET':
                  return getItemById();
              default:
                  return next.handle(request);
          }
      }

      function getAllItems() {
        return of(new HttpResponse({ status: 200, body: items }))
      }

      function getItemById() {
          const item = items.find(x => x.id == idFromUrl());
          return of(new HttpResponse({ status: 200, body: item }))
      }
      function idFromUrl() {
          const urlParts = url.split('/');
          return parseInt(urlParts[urlParts.length - 1]);
      }
  }
}
