import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { StoreFacadeService } from '../../../store/store-facade.service';

@Component({
    selector: 'app-rider-information',
    templateUrl: './rider-information.component.html',
    styleUrls: ['./rider-information.component.css']
})
export class RiderInformationComponent implements OnInit {
    public attractionName$ = this.storeFacade.user.ride.getAttractionName$;
    public ticketArray$ = this.storeFacade.user.ride.getTicketArray$;

    showAddRider = true;
    showInput = false;

    constructor(private storeFacade: StoreFacadeService, private router: Router, private route: ActivatedRoute) {}

    // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
    ngOnInit(): void {}

    showInputFields(): void {
        this.showInput = true;
        this.showAddRider = false;
    }

    onSubmit(ticketNumber: NgForm): void {
        this.storeFacade.user.ride.fetchAdditionalTicket(ticketNumber.value.ticket_number);
        ticketNumber.setValue({ ticket_number: '' });
    }

    nextPage(): void {
        this.router.navigate(['../time-slots'], { relativeTo: this.route });
    }
}
