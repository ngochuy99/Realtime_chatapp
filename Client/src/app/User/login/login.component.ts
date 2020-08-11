import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  protected loginForm: FormGroup;
  private username: FormControl;
  private password: FormControl;
  constructor(private fb: FormBuilder) {
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
    console.log(this.loginForm.get('username').value);
    console.log(this.loginForm.get('password').value);
  }
}
