import { Injectable } from '@angular/core';
import {Actions, concatLatestFrom, createEffect, ofType} from '@ngrx/effects';
import { map, switchMap } from 'rxjs';

import { TicketService } from '../../../services/ticket.service';
import {freeSlotsActions} from "./free-slots.actions";
import {FreeSlotsService} from "../../../services/free-slots.service";
import {rideSummarySelectors} from "../ride-summary";
import {Store} from "@ngrx/store";
import {ticketSelectors} from "../ticket";

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
