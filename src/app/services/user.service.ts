import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {
  url: string;

  constructor(private http: Http) {
    this.url = 'http://ea68c280.ngrok.io/';
  }

  registerUser(user: any) {

    var data = {
      "email": user.email,
      "password": user.password
    };

    return this.http
      .post(this.url + 'user', data)
      .map((response: Response) => response.json());
  }

  login(user: any) {
    return this.http
      .post(this.url + 'user/login', user)
      .map((response: Response) => response.json());
  }

  saveUserData(data: any, userId: number) {
    console.log(userId);
    return this.http
      .post(this.url + "user/" + userId + "/account", data)
      .map((response: Response) => response.json());
  }

  selectCreditCard(data: any, userId: number) {
    return this.http
      .post(this.url + "user/" + userId + "/credit", data)
      .map((response: Response) => response.json())
  }


}
