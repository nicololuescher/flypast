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

    ngOnInit(): void {
        this.storeFacade.user.attraction.fetchAttractions();
    }

    onClickItem(title: string): void {
        // eslint-disable-next-line no-console
        console.log(title);
        this.router.navigate(['../rider-information'], { relativeTo: this.route });
    }
}
