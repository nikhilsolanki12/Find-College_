import { Injectable } from '@angular/core';
import {
	HttpEvent, HttpInterceptor,
	HttpHandler, HttpRequest, HttpResponse,
	HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, retry, mergeMap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class ErrorHandlingInterceptor implements HttpInterceptor {
	constructor(
		private router: Router,

	) { }
	intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		return next.handle(httpRequest).pipe(
			map((event: HttpEvent<any>) => {
				if (event instanceof HttpResponse) {
					
					// this.service.stopLoading();
				}
				return event;
			}),
			catchError((error: HttpErrorResponse) => {
				if (error instanceof HttpErrorResponse) {
					console.log('errro', error);
					// console.log('error in errorhandling interceptor--',error['error']);
					// if (error['error'] && error['error']['code'] === 401 && error['error']['message'] === 'token expired') {
						
					// 	// this.authServices.getRefreshToken();
					// 	this.authServices.logoutUser();
					// 	this.router.navigate(['/login']);
					// } else {
					// 	 if (error.status === 401) {
					// 		this.authServices.logoutUser();
					// 		this.router.navigate(['/login']);
					// 	}
					// }
				}
				// this.service.stopLoading();
				if (error.error instanceof Error) {
					// A client-side or network error occurred.
					retry(3);
				} else {
				}
				return throwError(error);
			}));
	}
}
