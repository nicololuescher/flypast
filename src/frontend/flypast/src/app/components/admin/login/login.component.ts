import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    constructor(private router: Router, private route: ActivatedRoute) {}

    /* eslint-disable */
    ngOnInit(): void {}
    /* eslint-enable */

    onSubmit(loginData: NgForm): any {
        // eslint-disable-next-line no-console
        console.log(loginData.value);
        this.router.navigate(['../home'], { relativeTo: this.route });
    }
}
