import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {
  private rooturl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }
  login(userinfo) {
    return this.http.post(this.rooturl + '/users/login', userinfo);
  }
  register(registerinfo) {
    return this.http.post(this.rooturl + '/users/register', registerinfo);
  }
}
