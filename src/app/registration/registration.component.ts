import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { UserService } from '../services/user.service';

@Component({
  selector: 'registration-component',
  templateUrl: './registration.component.html'
})
export class RegistrationComponent {

  constructor(private location: Location, private userService: UserService) { }

  isLoading = false;
  registrationForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  })

  registerUser(userForm) {
    this.isLoading = true;
    this.userService.registerUser(userForm.value)
      .subscribe(response => {
        console.log(response)
        this.location.back();
      },
        error => {
          console.log(error);
          this.isLoading = false;
        }, () => this.isLoading = false);
  }

  verifyPassword(userForm) {
    var data = userForm.value;
  }

  goToLogin() {
    this.location.back();
  }
}
