import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    constructor() {}

    /* eslint-disable */
    ngOnInit(): void {}
    /* eslint-enable */

    onSubmit(loginData: NgForm): any {
        // eslint-disable-next-line no-console
        console.log(loginData.value);
    }
}
