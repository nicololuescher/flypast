import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
    titles = [{ name: 'FIRST FLIEGER' }, { name: 'FIRST GLIDER' }, { name: 'FIRST MOUNTAIN CART' }, { name: 'TROTTIBIKE' }];

    constructor() {}

    /* eslint-disable */
    ngOnInit(): void {}
    /* eslint-enable */

    onClickItem(title: string): any {}
}
