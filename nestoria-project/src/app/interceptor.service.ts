import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';
import {tap} from 'rxjs/operators';


export class AppInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Intercept request", req);

    const cloned = req.clone({
      headers: req.headers.append("New","value")
    })
    return next.handle(cloned).pipe(
      tap(event=>{
        if(event.type ===HttpEventType.Response){
          console.log("interceptor response", event)
        }

      })
    );
  }

}
