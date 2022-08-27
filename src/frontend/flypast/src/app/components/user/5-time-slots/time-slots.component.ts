import { Component, OnInit } from '@angular/core';

import { StoreFacadeService } from '../../../store/store-facade.service';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-time-slots',
    templateUrl: './time-slots.component.html',
    styleUrls: ['./time-slots.component.css']
})
export class TimeSlotsComponent implements OnInit {
    public attractionName$ = this.storeFacadeService.user.ride.getAttractionName$;

    constructor(private storeFacadeService: StoreFacadeService, private router: Router, private route: ActivatedRoute) {}

    // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
    ngOnInit(): void {}

    selectSlot(id: number): void {
        this.storeFacadeService.user.ride.storeSelectedSlotNumber(id);
        this.router.navigate(['../order-summary'], { relativeTo: this.route });

    }
}
