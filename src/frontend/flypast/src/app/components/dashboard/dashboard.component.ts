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
    object = [{ free: 20, ges: 15, name: 'Jannik' }, { free: 25, ges: 10, name: 'Elia' }, { free: 15, ges: 5, name: 'Lüscher' }, { free: 20, ges: 15, name: 'Hug' }]

    constructor(private http: HttpClient) {}

    ngOnInit(): void {
        // this.http.get(environment.baseUrl + 'dashboard').subscribe((obj) => {
        //     console.log(obj);
        //     this.object = obj;
        // });
    }
}
