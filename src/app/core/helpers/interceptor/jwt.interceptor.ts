import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

import { LocalStorageService } from '@app/core/services';
import { Router } from '@angular/router';
import { AppRotues } from '@app/shared/constants/app.routes';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private localStorageService: LocalStorageService,private router:Router) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.localStorageService.get("token");
    if (token) {
      // If we have a token, we set it to the header
      request = request.clone({
        headers: new HttpHeaders({
          Authorization : `Bearer ${token}`,
        })
      });
    }

    return next.handle(request).pipe(
      catchError((err) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 400 || err.status === 401) {
            // redirect user to the logout page
            this.localStorageService.clear();
            this.router.navigate([`${AppRotues.login}`])
          }
        }
        return throwError(err);
      })
    )

  }
}
