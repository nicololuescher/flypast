import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Ticket } from '../interfaces/models';
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
                fetchTicket: (ticketNumber: string): void => this.store$.dispatch(ticketActions.fetchTicket({ ticketNumber }))
            }
        };
    }
}
