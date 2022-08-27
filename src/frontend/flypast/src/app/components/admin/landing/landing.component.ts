import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
    titles = [{ name: 'FIRST FLIEGER' }, { name: 'FIRST GLIDER' }, { name: 'FIRST MOUNTAIN CART' }, { name: 'TROTTIBIKE' }];

    constructor(private router: Router, private route: ActivatedRoute) {}

    /* eslint-disable */
    ngOnInit(): void {}
    /* eslint-enable */

    onClickItem(title: string): any {
        this.router.navigate(['../edit'], { queryParams: { id: 'popular' }, relativeTo: this.route });
    }
}
