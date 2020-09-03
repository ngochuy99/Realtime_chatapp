import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(public auth: AuthService, public router: Router) { }
  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {   //Check if token is authenticated
      this.router.navigate(['/user/login']);
      return false;
    }
    return true;
  }
}
