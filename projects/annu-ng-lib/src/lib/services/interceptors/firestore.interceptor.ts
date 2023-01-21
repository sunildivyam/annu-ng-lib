import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LibConfig } from '../../app-config/app-config.interface';

@Injectable({
  providedIn: 'root',
})
export class FirestoreInterceptor implements HttpInterceptor {

  constructor(private libConfig: LibConfig) {}
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(request.url.includes(this.libConfig.firestoreBaseApiUrl)) {
      const apiKey = this.libConfig.firebase.apiKey;
      const clonedRequest = request.clone({
        setParams: {key: apiKey}
      });
      return next.handle(clonedRequest);
    }
    return next.handle(request);
  }
}
