import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { UserApiService} from '../../services/user-api.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  protected loginForm: FormGroup;
  private username: FormControl;
  private password: FormControl;
  constructor(private fb: FormBuilder, private userapi: UserApiService) {
    this.username = new FormControl('', [Validators.required]);
    this.password = new FormControl('', [Validators.required]);
    this.loginForm = fb.group({
      username: this.username,
      password: this.password
    });
  }
  ngOnInit() {
  }

  login() {
    const userinfo = this.loginForm.value;
    console.log(userinfo);
    this.userapi.login(userinfo);
  }
}
