import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';

import { StoreFacadeService } from '../../../store/store-facade.service';

@Component({
    selector: 'app-time-slots',
    templateUrl: './time-slots.component.html',
    styleUrls: ['./time-slots.component.css']
})
export class TimeSlotsComponent implements OnInit {
    public attractionName$ = this.storeFacadeService.user.ride.getAttractionName$;
    public freeChunks$ = this.storeFacadeService.user.freeSlots.getFreeSlots$;

    constructor(private storeFacadeService: StoreFacadeService, private router: Router, private route: ActivatedRoute) {}

    // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
    ngOnInit(): void {
        this.storeFacadeService.user.freeSlots.fetchFreeSlots();
    }

    selectSlot(id: number): void {
        this.storeFacadeService.user.ride.storeSelectedSlotNumber(id);
        this.router.navigate(['../order-summary'], { relativeTo: this.route });
    }

    selectFirstSlot(): void {
        this.storeFacadeService.user.freeSlots.getFirstFreeSlot$.pipe(take(1)).subscribe((value) => {
            this.selectSlot(value ?? 0);
        });
    }
}
