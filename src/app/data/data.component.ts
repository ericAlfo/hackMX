import { Component, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { UserService } from '../services/user.service';
import { timeout } from 'q';

@Component({
    selector: 'data-component',
    templateUrl: './data.component.html'
})
export class DataComponent {

    params: any;
    isSaving :any = false;
    constructor(private userService: UserService, private route: ActivatedRoute, private router : Router) {
        this.route.params.subscribe(params => this.params = params);
    }

    hasData = false;
    isLoading = false;

    dataForm = new FormGroup({
        curp: new FormControl('', Validators.required),
        name: new FormControl(''),
        firstSurname: new FormControl(''),
        secondSurname: new FormControl(''),
        age: new FormControl(''),
        cp: new FormControl('')
    })

    sendDataToServer(dataForm) {
        this.isSaving = true;
        this.userService.saveUserData(dataForm.value, this.params["userId"])
            .subscribe(response => {
                this.isSaving = false;
                this.router.navigate(["user/" + this.params["userId"] + "/credit-cards"]);
            }, err => {
                this.isSaving = false;
                console.log(err)
            });
    }

    generateDataWithCurp(dataForm) {
        this.isLoading = true;
        setTimeout(() => {
            this.hasData = true;
            var data = this.getCurpsData(dataForm.value.curp);
            this.dataForm.get("name").setValue(data.name);
            this.dataForm.get("firstSurname").setValue(data.firstSurname);
            this.dataForm.get("secondSurname").setValue(data.secondSurname);
            this.dataForm.get("age").setValue(data.age);
            this.dataForm.get("cp").setValue("40000");
            this.isLoading = false;
        }, 2000);
    }

    cleanDataFields() {
        this.hasData = false;
        this.dataForm.reset();
    }

    getCurpsData(curp): any {
        var data = {};
        if (curp === 'CAHA971225MQTLRN05') {
            data["name"] = 'ANDREA';
            data["firstSurname"] = 'CALLEJAS';
            data["secondSurname"] = 'HERNANDEZ';
            data["age"] = 20;
            data["cp"] = "76804";
        } else if (curp === 'AOHE960325HVZLRR04') {
            data["name"] = 'ERIC';
            data["firstSurname"] = 'ALFONSO';
            data["secondSurname"] = 'HERNANDEZ';
            data["age"] = 22;
            data["cp"] = "94330";
        } else if (curp === 'VAPH950711HVZZLG08') {
            data["name"] = 'HUGO IVAN';
            data["firstSurname"] = 'VAZQUEZ';
            data["secondSurname"] = 'PALACIOS';
            data["age"] = 22;
            data["cp"] = "94330";
        } else if (curp === 'RORM950517HVZMZG06') {
            data["name"] = 'MIGUEL EDUARDO';
            data["firstSurname"] = 'ROMERO';
            data["secondSurname"] = 'RUIZ';
            data["age"] = 22;
            data["cp"] = "94330";
        }
        return data;
    }
}
