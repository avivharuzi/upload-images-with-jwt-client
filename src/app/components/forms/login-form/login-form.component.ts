import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validator } from '../../../models/validator.model';
import { ValidationService } from '../../../services/validation/validation.service'
import { LoginService } from '../../../services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  public loginForm: FormGroup;
  public loginMessage: any;

  constructor(
    public validationService: ValidationService,
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
    this.createLoginForm();
  }

  createLoginForm(): void {
    const userName: FormControl = new FormControl('', [
      Validator.required('Username')
    ]);

    const password: FormControl = new FormControl('', [
      Validator.required('Password')
    ]);

    this.loginForm = new FormGroup({
      userName,
      password
    });
  }

  setLoginForm(): void {
    this.validationService.dirtyAllInputs(this.loginForm);

    if (this.loginForm.valid) {
      const user = {
        userName: this.loginForm.get('userName').value,
        password: this.loginForm.get('password').value
      }

      this.loginUser(user);
    }
  }

  loginUser(user) {
    this.loginService.login(user).subscribe((res: any) => {
      if (res) {
        this.router.navigate(['/']);
      }
    }, (err) => {
      this.loginMessage = err.error;
    });
  }
}
