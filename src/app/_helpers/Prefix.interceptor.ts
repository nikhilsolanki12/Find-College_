import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

/**
 * Prefixes all requests with `environment.serverUrl`.
 */
@Injectable()
export class PrefixInterceptor implements HttpInterceptor {
	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		// add apiUrl to each request
		if (!/^(http|https):/i.test(request.url)) {
			request = request.clone({ url: environment.apiUrl + request.url });
		}
		return next.handle(request);
	}
}
