import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions, Response  } from '@angular/http';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { HttpClient , HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private loggedIn = false;
  constructor(@Inject('apiUrl') private apiUrl, private http: HttpClient) { }

  login(username, password): Observable<boolean> {
    const url: string = this.apiUrl + '/account/login';
    const headers = new Headers();
    headers.append('Authorization', btoa(username + ':' + password));

    const requestOptions = new RequestOptions({ headers: headers });
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    return this.http.post(url, JSON.stringify({ username, password }), httpOptions).pipe(
      map(res => {
        if (res) {
          localStorage.setItem('isLogged', res.toString());
          this.loggedIn = true;
        }
        return true;
      }));
  }

  logOut() {
    localStorage.removeItem('isLogged');
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }

}
