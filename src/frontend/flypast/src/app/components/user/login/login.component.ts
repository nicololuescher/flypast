import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { filter, take } from 'rxjs';

import { StoreFacadeService } from '../../../store/store-facade.service';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    constructor(private storeFacade: StoreFacadeService, private router: Router, private route: ActivatedRoute) {}

    /* eslint-disable */
    ngOnInit(): void {}
    /* eslint-enable */

    onSubmit(ticketNumber: NgForm): any {
        // TODO: request and store
        this.storeFacade.user.ticket.fetchTicket(ticketNumber.value.ticket_number);
        this.storeFacade.user.ticket.getTicket$
            .pipe(
                filter((value) => !!value),
                take(1)
            )
            // eslint-disable-next-line no-console
            .subscribe((value) => this.router.navigate(['../ride-selection'], {relativeTo: this.route}));
    }
}