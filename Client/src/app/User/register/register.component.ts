import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserApiService } from '../../services/user-api.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  protected RegisterForm: FormGroup;
  private username: FormControl;
  private password: FormControl;
  private repassword: FormControl;
  private email: FormControl;
  constructor(private fb: FormBuilder, private userapi: UserApiService) {
    this.username = new FormControl('', [Validators.required]);
    this.password = new FormControl('', [Validators.required]);
    this.repassword = new FormControl('', [Validators.required]);
    this.email = new FormControl('', [Validators.required]);
    this.RegisterForm = fb.group({
      username: this.username,
      password: this.password,
      repassword: this.repassword,
      email: this.email
    });
   }

  ngOnInit() {
  }
  register() {
    const registerinfo = this.RegisterForm.value;
    console.log(registerinfo);
    this.userapi.register(registerinfo);
  }
}
