import { createSelector } from '@ngrx/store';
import { format } from 'date-fns';

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

const getTicketDateUi = createSelector(getTicket, (ticket: Ticket | null): string | null => {
    if (!ticket || !ticket.valid_at_day) {
        return null;
    }
    return  format(ticket.valid_at_day, 'dd.MM.y');
});

export const ticketSelectors = {
    getTicket,
    getTicketId,
    getNumberOfRides,
    getTicketNumber,
    getTicketDateUi
};
