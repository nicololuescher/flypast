import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Attraction } from 'src/app/interfaces/models';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    object: any;

    constructor(private http: HttpClient) {}

    ngOnInit(): void {
        this.http.get(environment.baseUrl + 'dashboard').subscribe((obj) => {
            console.log(obj);
            this.object = obj;
        });
    }
}
