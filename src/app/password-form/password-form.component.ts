import { Component } from '@angular/core';
import{FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { PasswordValidators } from "./password.validators";
@Component({
  selector: 'password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.css']
})
export class PasswordFormComponent {
  form: FormGroup;
constructor(fb: FormBuilder) {
  this.form = fb.group({
oldPassword: ['', 
Validators.required, 
PasswordValidators.validOldPassword
],
newPassword: ['',Validators.required],
confirmPassword: ['',Validators.required],
  }, 

  {
    validator: PasswordValidators.passwordsShouldMatch
  });
}
  get oldPassword() {
    return this.form.get('oldPassword');
  }
get newPassword() {
    return this.form.get('newPassword');
  }
  get confirmPassword() {
    return this.form.get('confirmPassword');
  }

  }

