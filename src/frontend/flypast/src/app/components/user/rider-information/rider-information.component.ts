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

    ngOnInit(): void {
    }

    openTimeSelect(): void {
        this.router.navigate(['../select-activity'], { relativeTo: this.route });
    }

    showInputFields(): void {
        this.showInput = true;
        this.showAddRider = false;
    }

    onSubmit(ticketNumber: NgForm): any {
        this.storeFacade.user.ride.fetchAdditionalTicket(ticketNumber.value.ticket_number);
    }

    addTicket(ticketNumber: string): void {

    }
}
