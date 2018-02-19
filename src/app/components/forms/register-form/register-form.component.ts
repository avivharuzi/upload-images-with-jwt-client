import { User } from './../../../models/user.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, AbstractControl } from '@angular/forms';
import { Validator } from '../../../models/validator.model';
import { ValidationService } from '../../../services/validation/validation.service';
import { UserService } from '../../../services/user/user.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  public registerForm: FormGroup;
  public registerMessage: any;

  constructor(
    public validationService: ValidationService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.createRegisterForm();
  }

  createRegisterForm(): void {
    const userName: FormControl = new FormControl('', [
      Validator.required('Username')
    ]);

    const firstName: FormControl = new FormControl('', [
      Validator.required('First name')
    ]);

    const lastName: FormControl = new FormControl('', [
      Validator.required('Last name')
    ]);

    const email: FormControl = new FormControl('', [
      Validator.required('Email'),
      Validator.isEmail()
    ]);

    const password: FormControl = new FormControl('', [
      Validator.required('Password')
    ]);

    const confirmPassword: FormControl = new FormControl('', [
      Validator.required('Confirm Password')
    ]);

    this.registerForm = new FormGroup({
      userName,
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    });
  }

  setRegisterForm(): void {
    this.validationService.dirtyAllInputs(this.registerForm);

    if (this.registerForm.valid) {
      const user: User = new User(
        this.registerForm.get('userName').value,
        this.registerForm.get('firstName').value,
        this.registerForm.get('lastName').value,
        this.registerForm.get('email').value,
        this.registerForm.get('password').value
      );

      this.setUser(user);
    }
  }

  setUser(user: User): void {
    this.userService.setUser(user).subscribe((res: any) => {
      this.registerForm.reset();
      this.registerMessage = res;
    }, err => {
      if (err.error.errors.length) {
        this.registerMessage = err.error;
      }
    });
  }
}
