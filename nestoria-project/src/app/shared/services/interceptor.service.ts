import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';

import { products } from '../fake/fakeData';

export class FakeBackendInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log('HTTP REQUEST INTERCEPTED BY THE MOCKED BACKEND');
    return of(new HttpResponse({body: products}));}

}
