import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { from, Observable, switchMap } from 'rxjs';
import { LibConfig } from '../../app-config/app-config.interface';
import { AuthFirebaseService } from '../../firebase';

@Injectable({
  providedIn: 'root',
})
export class ApiInterceptor implements HttpInterceptor {

  constructor(private libConfig: LibConfig, private authFireService: AuthFirebaseService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.url.includes(`/api/`)) {
      const apiKey = this.libConfig.firebase.apiKey;
      let clonedRequest = request.clone({
        setParams: { key: apiKey }
      });
      if (this.authFireService.getCurrentUserId()) {
        return from(this.authFireService.getAccessToken()).pipe(
          switchMap(token => {
            if (token) {
              clonedRequest = clonedRequest.clone({ setHeaders: {Authorization: `Bearer ${token}`}});
              return next.handle(clonedRequest);
            }
          })
        )
      } else {
        return next.handle(clonedRequest);
      }

    } else {
      return next.handle(request);
    }
  }
}
