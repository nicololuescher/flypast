import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';

import { TicketService } from '../../../services/ticket.service';
import { ticketActions } from './ticket.actions';

@Injectable()
export class TicketEffect {
    constructor(private actions$: Actions, private ticketService: TicketService) {}

    public fetchTicket$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ticketActions.fetchTicket),
            switchMap((action) => {
                return this.ticketService.fetchTicket(action.ticketNumber).pipe(
                    map((response) =>
                        ticketActions.storeTicket({
                            response
                        })
                    )
                );
            })
        );
    });
}
