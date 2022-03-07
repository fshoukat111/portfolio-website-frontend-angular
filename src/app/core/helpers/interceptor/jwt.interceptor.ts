import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { LocalStorageService } from '@app/core/services';
import { environment } from 'src/environments/environment.prod';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private localStorage: LocalStorageService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.localStorage.get("token");
    const isApiUrl = request.url.startsWith(environment.backend_url);
    if (token && isApiUrl) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(request);
  }
}
