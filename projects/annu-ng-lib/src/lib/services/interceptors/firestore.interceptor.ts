import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { from, last, map, Observable, switchMap } from 'rxjs';
import { LibConfig } from '../../app-config/app-config.interface';
import { AuthFirebaseService } from '../../firebase';

@Injectable({
  providedIn: 'root',
})
export class FirestoreInterceptor implements HttpInterceptor {

  constructor(private libConfig: LibConfig, private authFireService: AuthFirebaseService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // intercepts both firebase store and firebase storage http requests.
    if (request.url.includes(this.libConfig.firestoreBaseApiUrl) || request.url.includes(this.libConfig.fireStorageBaseApiUrl)) {
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
