import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginUrl = 'http://your-api-url/login';

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post(this.loginUrl, { username, password });
  }
}
