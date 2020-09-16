import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public jwtHelper: JwtHelperService, private cookie:CookieService) { }

  public isAuthenticated(): boolean {
    const token = this.cookie.get('accessToken');
    return !this.jwtHelper.isTokenExpired(token); //Check whether token is expired or not
  }
}
