import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter } from 'rxjs';

import { StoreFacadeService } from '../../../store/store-facade.service';

@Component({
    selector: 'app-ride-selection',
    templateUrl: './ride-selection.component.html',
    styleUrls: ['./ride-selection.component.css']
})
export class RideSelectionComponent implements OnInit {
    public numberOfRides$ = this.storeFacade.user.ride.getStillOpenCount$;
    public rides$ = this.storeFacade.user.ride.getPersistedRides$;

    constructor(private storeFacade: StoreFacadeService, private router: Router, private route: ActivatedRoute) {}

    // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
    ngOnInit(): void {}

    openSelect(): void {
        this.router.navigate(['../select-activity'], { relativeTo: this.route });
    }
}
