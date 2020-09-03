import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { UserApiService } from '../../services/user-api.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  protected RegisterForm: FormGroup;
  private username: FormControl;
  private name: FormControl;
  private password: FormControl;
  private repassword: FormControl;
  private email: FormControl;

  constructor(private fb: FormBuilder, private userapi: UserApiService) {
    this.username = new FormControl('', [Validators.required]);
    this.password = new FormControl('', [Validators.required]);
    this.repassword = new FormControl('', [Validators.required]);
    this.email = new FormControl('', [Validators.required]);
    this.name = new FormControl('', [Validators.required]);
    this.RegisterForm = fb.group({
      name: this.name,
      username: this.username,
      password: this.password,
      repassword: this.repassword,
      email: this.email
    },
    { validators: checkPasswords });

    function checkPasswords(group: FormGroup) { // here we have the 'passwords' group
      const condition = (group.get('password').value !== group.get('repassword').value&& group.get('repassword').dirty)
      return condition ? { notSame: true } : null;
    }
   }

  ngOnInit() {
  }
  register() {
    const registerinfo = this.RegisterForm.value;
    this.userapi.register(registerinfo).subscribe(val=>console.log(val));
  }
}

