import { Component, TemplateRef, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';

@Component({
    selector: 'categories-component',
    templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {

    products : any[];
    constructor(private categoriesService: CategoriesService){}
    ngOnInit(): void {
        this.categoriesService.getCategories()
            .subscribe(response => this.products = response, err => console.log(err));
    }
}
