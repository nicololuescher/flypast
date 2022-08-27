import { Component, OnInit } from '@angular/core';

import { StoreFacadeService } from '../../../store/store-facade.service';

@Component({
    selector: 'app-time-slots',
    templateUrl: './time-slots.component.html',
    styleUrls: ['./time-slots.component.css']
})
export class TimeSlotsComponent implements OnInit {
    constructor(private storeFacadeService: StoreFacadeService) {}

    // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
    ngOnInit(): void {
        this.storeFacadeService.user.ride.storeSelectedSlotNumber(0);
    }

    sendIt(): void {
        this.storeFacadeService.user.ride.storeRide();
    }
}
