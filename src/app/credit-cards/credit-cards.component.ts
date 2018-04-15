import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'credit-cards-component',
    templateUrl: './credit-cards.component.html'
})
export class CreditCardsComponent implements OnInit {

    ngOnInit(): void {
        this.creditLimit = Math.floor(Math.random() * (30000 - 1000)) + 1000;
        this.finalCreditCards.forEach(credit => {
            if (this.creditLimit >= credit.creditCard)
                this.creditCards.push(credit);
        });
    }
    params: any;
    isSaving = false;
    creditLimit: any = 5000;
    creditCards: any[];
    finalCreditCards: any[];
    constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) {
        this.route.params.subscribe(params => this.params = params);
        this.creditCards = [];
        this.finalCreditCards = [{
            "cardId" : 1,
            "name": "Santander Black Unlimited",
            "creditCard": 25000,
            "image": "../../assets/images/credit-cards/Santander-Black-Unlimited.png"
        }, {
            "cardId" : 2,
            "name": "Santander Fiesta Rewards Platino",
            "creditCard": 25000,
            "image": "../../assets/images/credit-cards/Santander-fiesta-rewards-platino.png"
        }, {
            "cardId" : 3,
            "name": "Santander Fiesta Rewards Oro",
            "creditCard": 7500,
            "image": "../../assets/images/credit-cards/Santander-fiesta-oro.png"
        }, {
            "cardId" : 4,
            "name": "Santander American Express",
            "creditCard": 10000,
            "image": "../../assets/images/credit-cards/Santander-american-express.png"
        }, {
            "cardId" : 5,
            "name": "Santander Light",
            "creditCard": 7500,
            "image": "../../assets/images/credit-cards/Santander-light.png"
        }, {
            "cardId" : 6,
            "name": "Santander Free",
            "creditCard": 3000,
            "image": "../../assets/images/credit-cards/Santander-free.png"
        }];
    }

    selectCreditCard(creditCard) {
        this.isSaving = true;
        this.userService.selectCreditCard(creditCard, this.params['userId'])
            .subscribe(response => {
                this.isSaving = false;
                this.router.navigate(["/products/" + this.params["userId"]]);
            }, err => {
                this.isSaving = false;
                console.log(err)
            });
    }
}