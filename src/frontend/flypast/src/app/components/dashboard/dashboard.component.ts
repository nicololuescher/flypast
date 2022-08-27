import { Component, OnInit } from '@angular/core';
import { Attraction } from 'src/app/interfaces/models';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    attentions?: Attraction[];
    constructor() {}

    /* eslint-disable */
    ngOnInit(): void {}
    /* eslint-enable */
}
