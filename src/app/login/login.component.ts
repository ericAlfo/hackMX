import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { UserService } from '../services/user.service';

@Component({
    selector: 'login-component',
    templateUrl: './login.component.html'
})
export class LoginComponent {

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private userService: UserService
    ) { }
    title = 'app';
    isLoging = false;
    userForm = new FormGroup({
        email: new FormControl('', Validators.required),
        password: new FormControl()
    })

    loginUser(userForm) {
        this.isLoging = true;
        this.userService.login(userForm.value)
            .subscribe(response => {
                if (response.exists) {
                    this.isLoging = false;
                    var userId = 3;
                    this.router.navigate(["user/" + response.userId + "/data"]);
                } else {
                    this.isLoging = false;
                    console.log("Datos erroneos");
                }
            }, error => {
                this.isLoging = false;
                console.log(error)
            });
    }

    goToSignUp() {
        this.router.navigate(['/registration']);
    }
}
