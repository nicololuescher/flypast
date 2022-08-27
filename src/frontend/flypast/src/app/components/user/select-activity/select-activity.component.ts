import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-select-activity',
    templateUrl: './select-activity.component.html',
    styleUrls: ['./select-activity.component.css']
})
export class SelectActivityComponent implements OnInit {
    titles = [{ name: 'FIRST FLIEGER' }, { name: 'FIRST GLIDER' }, { name: 'FIRST MOUNTAIN CART' }, { name: 'TROTTIBIKE' }];

    constructor() {}

    /* eslint-disable */
    ngOnInit(): void {}
    /* eslint-enable */

    onClickItem(title: string): void {
        // eslint-disable-next-line no-console
        console.log(title);
    }
}
