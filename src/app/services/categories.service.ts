import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CategoriesService {
    url: string;

    constructor(private http: Http) {
        this.url = 'http://ea68c280.ngrok.io/';
    }

    getCategories(){
        return this.http
            .get(this.url + "user/category")
            .map((response : Response) => response = response.json());
    }

}