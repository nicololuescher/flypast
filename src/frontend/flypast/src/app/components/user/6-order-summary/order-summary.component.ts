import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { StoreFacadeService } from '../../../store/store-facade.service';

@Component({
    selector: 'app-order-summary',
    templateUrl: './order-summary.component.html',
    styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {
    public attractionName$ = this.storeFacadeService.user.ride.getAttractionName$;
    public ticketArray$ = this.storeFacadeService.user.ride.getTicketArray$;
    public arriveByTime$ = this.storeFacadeService.user.ride.getArriveByTime$;
    public date$ = this.storeFacadeService.user.ticket.getTicketDateUi$;

    constructor(private storeFacadeService: StoreFacadeService, private router: Router, private route: ActivatedRoute) {}

    // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
    ngOnInit(): void {}

    confirm(): void {
        this.storeFacadeService.user.ride.storeRide();
        this.router.navigate(['../ride-selection'], { relativeTo: this.route });
    }

    cancel(): void {
        // Reset store
        this.router.navigate(['../ride-selection'], { relativeTo: this.route });
    }
}
