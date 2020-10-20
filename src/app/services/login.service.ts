import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Credentials} from '../component/model/credentials';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  authenticated = false;
  userName: any;
  headers: HttpHeaders = new HttpHeaders();

  constructor(private http: HttpClient, private router: Router) {
  }

  authenticate(credentials: Credentials): Observable<void> {
    this.headers = new HttpHeaders(credentials ? {
      authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password)
    } : {});

    return this.http.get<string>('/users', {headers: this.headers}).pipe(map(response => {
      if (response['name']) {
        this.userName = response['name'];
        this.authenticated = true;
      } else {
        this.authenticated = false;
      }
    }));
  }

  logout(): void {
    this.http.get<string>('/logout').subscribe(() => {
      this.authenticated = false;
      this.userName = '';
      this.headers = new HttpHeaders();
      this.router.navigate(['login']);
    });
  }
}
