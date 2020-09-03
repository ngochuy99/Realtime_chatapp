import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { UserApiService} from '../../services/user-api.service';
import { CookieService} from 'ngx-cookie-service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  protected loginForm: FormGroup;
  private username: FormControl;
  private password: FormControl;
  private rememberme: FormControl;
  private UaPCheck: boolean;  // Username and password check
  constructor(private fb: FormBuilder, private userapi: UserApiService, private cookie: CookieService) {
    this.username = new FormControl(this.cookie.get('username') || '', [Validators.required]);
    this.password = new FormControl('', [Validators.required]);
    this.rememberme = new FormControl(false || this.cookie.get('rememberme'));
    this.loginForm = fb.group({
      username: this.username,
      password: this.password,
      rememberme: this.rememberme
    });
  }
  ngOnInit() {
  }

  login() {
    const userinfo = this.loginForm.value;
    this.userapi.login(userinfo).subscribe(
      (data: any) => { // Use any to make data.accessToken correct
        this.cookie.set('accessToken', data.accessToken);
        this.cookie.set('refreshToken', data.refreshToken);
        if (userinfo.rememberme === true) {
          this.cookie.set('username', userinfo.username);
          this.cookie.set('rememberme', userinfo.rememberme);
        } else {
          this.cookie.delete('username');
          this.cookie.delete('rememberme');
        }
        this.UaPCheck = true;
      },
      error => {
        console.log(error.status);
        this.UaPCheck = false;
      }
    );
  }
}
