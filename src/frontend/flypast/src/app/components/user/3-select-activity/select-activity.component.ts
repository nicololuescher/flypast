import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { StoreFacadeService } from '../../../store/store-facade.service';

@Component({
    selector: 'app-select-activity',
    templateUrl: './select-activity.component.html',
    styleUrls: ['./select-activity.component.css']
})
export class SelectActivityComponent implements OnInit {
    public attractions$ = this.storeFacade.user.attraction.getAttractions$;

    constructor(private storeFacade: StoreFacadeService, private router: Router, private route: ActivatedRoute) {}

    /* eslint-disable */
    ngOnInit(): void {
        this.storeFacade.user.attraction.fetchAttractions();
    }
    /* eslint-enable */

    onClickItem(id: number): any {
        this.storeFacade.user.ride.storeSelectedAttraction(id);
        this.router.navigate(['../rider-information'], { relativeTo: this.route });
    }
}
