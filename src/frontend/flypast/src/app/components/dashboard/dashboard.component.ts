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
    color: any;

    constructor(private http: HttpClient) {}

    ngOnInit(): void {
        this.http.get(environment.baseUrl + 'dashboard').subscribe((obj) => {
            this.object = obj;
            for (let obj of this.object) {
                let percentage = obj.TotalSlots / obj.ReservedSlots;
                const element = <HTMLElement>document.getElementById(obj.Attraction.ID);
                if (percentage > 0.75) {
                    this.color = "bg-green-600";
                } else if (percentage > 0.25) {
                    this.color = "bg-orange-600";
                } else {
                    this.color = "bg-red-600";
                }
            }
        });
    }
}
