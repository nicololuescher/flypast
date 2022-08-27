import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { filter, map, switchMap } from 'rxjs';

import { RideService } from '../../../services/ride.service';
import { TicketService } from '../../../services/ticket.service';
import { attractionSelectors } from '../attraction';
import { ticketSelectors } from '../ticket';
import { rideSummaryActions } from './ride-summary.actions';
import { rideSummarySelectors } from './ride-summary.selectors';

@Injectable()
export class RideSummaryEffect {
    constructor(private actions$: Actions, private rideService: RideService, private store$: Store, private ticketService: TicketService) {}

    public storeSelectedAttraction$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(rideSummaryActions.storeSelectedAttraction),
            concatLatestFrom(() => [this.store$.select(ticketSelectors.getTicket), this.store$.select(attractionSelectors.getAttractions)]),
            filter(([_, ticket, attractions]) => !!ticket && !!attractions),
            map(([action, ticket, attractions]) => {
                const attraction = attractions?.find((attraction) => attraction.ID === action.id);
                return rideSummaryActions.storeSelectedAttractionAndTicket({ ticket: ticket!, attraction: attraction! });
            })
        );
    });

    public fetchTicket$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(rideSummaryActions.fetchAdditionalTicket),
            switchMap((action) => {
                return this.ticketService.fetchTicket(action.ticketNumber).pipe(
                    map((response) =>
                        rideSummaryActions.storeAdditionalTicket({
                            response
                        })
                    )
                );
            })
        );
    });

    public storeRide$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(rideSummaryActions.storeRide),
            concatLatestFrom(() => [this.store$.select(rideSummarySelectors.getRideSummary)]),
            switchMap(([_, rideSummary]) => {
                const requests: any[] = [];
                rideSummary.tickets.forEach((ticket) => {
                    requests.push(
                        this.rideService
                            .storeRide({
                                ticket_id: ticket.ID,
                                attraction_id: rideSummary?.attraction?.ID ?? 0,
                                slot_number: rideSummary?.slot_number ?? 0
                            })
                            .pipe(map((response) => rideSummaryActions.storeRideResponse({ response })))
                    );
                });

                return requests;
            })
        );
    });
}
