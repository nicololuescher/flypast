import { createSelector } from '@ngrx/store';

import { Ticket } from '../../../interfaces/models';
import { UserState } from '../user.reducer';
import { userSelector } from '../user.selectors';
import { TicketState } from './ticket.reducer';

const getTicketState = createSelector(userSelector, (state: UserState): TicketState => {
    return state['ticket'];
});

const getTicket = createSelector(getTicketState, (state: TicketState): Ticket | null => {
    return state.ticket;
});

const getTicketId = createSelector(getTicket, (ticket: Ticket | null): number | null => {
    return ticket?.ID ?? null;
});

const getNumberOfRides = createSelector(getTicket, (ticket: Ticket | null): number | null => {
    return ticket?.number_of_rides ?? null;
});

const getTicketNumber = createSelector(getTicket, (ticket: Ticket | null): string | null => {
    return ticket?.ticket_number ?? null;
});

export const ticketSelectors = {
    getTicket,
    getTicketId,
    getNumberOfRides,
    getTicketNumber
};
