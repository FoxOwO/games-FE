import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoginService} from '../services/login.service';
import {Router} from '@angular/router';

@Injectable()
export class HttpInterceptor implements HttpInterceptor {


  constructor(private loginService: LoginService, private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authorization = this.loginService.headers.get('authorization');
    let header;
    if (authorization != null) {
      header = {
        setHeaders: {
          'X-Requested-With': 'XMLHttpRequest',
          authorization
        }
      };
    } else {
      header = {
        setHeaders: {
          'X-Requested-With': 'XMLHttpRequest',
        }
      };
    }
    const xhr = req.clone(header);
    console.log(xhr.headers);
    return next.handle(xhr);
  }
}
