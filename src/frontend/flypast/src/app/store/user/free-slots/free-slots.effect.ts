import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap } from 'rxjs';

import { FreeSlotsService } from '../../../services/free-slots.service';
import { TicketService } from '../../../services/ticket.service';
import { rideSummarySelectors } from '../ride-summary';
import { ticketSelectors } from '../ticket';
import { freeSlotsActions } from './free-slots.actions';

@Injectable()
export class FreeSlotsEffect {
    constructor(private actions$: Actions, private freeSlotsService: FreeSlotsService, private store$: Store) {}

    public fetchTicket$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(freeSlotsActions.fetchFreeSlots),
            concatLatestFrom(() => [
                this.store$.select(rideSummarySelectors.getAttraction),
                this.store$.select(ticketSelectors.getTicketId),
                this.store$.select(rideSummarySelectors.getTicketCount)
            ]),
            switchMap(([_, attraction, ticketId, ticketCount]) => {
                return this.freeSlotsService.fetchFreeSlots(attraction!, ticketId!, ticketCount!).pipe(
                    map((response) =>
                        freeSlotsActions.storeFreeSlots({
                            response
                        })
                    )
                );
            })
        );
    });
}
