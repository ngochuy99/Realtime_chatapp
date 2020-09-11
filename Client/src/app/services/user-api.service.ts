import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {
  constructor(private http: HttpClient) { }
  login(userinfo) {
    return this.http.post(environment.root_url + '/users/login', userinfo);
  }
  register(registerinfo) {
    return this.http.post<any>(environment.root_url + '/users/register', registerinfo);
  }
}
