import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Attraction, Ticket } from '../interfaces/models';
import { RideSummary } from '../interfaces/ride-summary.interface';
import { attractionActions, attractionSelectors } from './user/attraction';
import { rideSummaryActions, rideSummarySelectors } from './user/ride-summary';
import { ticketActions, ticketSelectors } from './user/ticket';

@Injectable({
    providedIn: 'root'
})
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export class StoreFacadeService {
    constructor(private store$: Store) {}

    public get user() {
        return {
            ticket: {
                getTicket$: ((): Observable<Ticket | null> => this.store$.select(ticketSelectors.getTicket))(),
                getNumberOfRides$: ((): Observable<number | null> => this.store$.select(ticketSelectors.getNumberOfRides))(),
                getTicketNumber$: ((): Observable<string | null> => this.store$.select(ticketSelectors.getTicketNumber))(),
                fetchTicket: (ticketNumber: string): void => this.store$.dispatch(ticketActions.fetchTicket({ ticketNumber }))
            },
            attraction: {
                getAttractions$: ((): Observable<Attraction[] | null> => this.store$.select(attractionSelectors.getAttractions))(),
                fetchAttractions: (): void => this.store$.dispatch(attractionActions.fetchAttractions())
            },
            ride: {
                getRideSummary$: ((): Observable<RideSummary> => this.store$.select(rideSummarySelectors.getRideSummary))(),
                storeSelectedAttraction: (id: number): void => this.store$.dispatch(rideSummaryActions.storeSelectedAttraction({ id })),
                fetchAdditionalTicket: (ticketNumber: string): void => this.store$.dispatch(rideSummaryActions.fetchAdditionalTicket({ ticketNumber })),
                storeSelectedSlotNumber: (id: number): void => this.store$.dispatch(rideSummaryActions.storeSelectedSlotNumber({ id })),
                storeRide: (): void => this.store$.dispatch(rideSummaryActions.storeRide())
            }
        };
    }
}
