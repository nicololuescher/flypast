import { Component, OnInit } from '@angular/core';
import {StoreFacadeService} from "../../../store/store-facade.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-select-activity',
    templateUrl: './select-activity.component.html',
    styleUrls: ['./select-activity.component.css']
})
export class SelectActivityComponent implements OnInit {
    titles = [{ name: 'FIRST FLIEGER' }, { name: 'FIRST GLIDER' }, { name: 'FIRST MOUNTAIN CART' }, { name: 'TROTTIBIKE' }];

    constructor(private storeFacade: StoreFacadeService, private router: Router, private route: ActivatedRoute) {}

    /* eslint-disable */
    ngOnInit(): void {}
    /* eslint-enable */

    onClickItem(title: string): void {
        // eslint-disable-next-line no-console
        console.log(title);
        this.router.navigate(['../rider-information'], { relativeTo: this.route });
    }
}
