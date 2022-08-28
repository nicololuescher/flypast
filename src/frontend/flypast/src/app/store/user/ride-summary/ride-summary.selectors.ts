import { createSelector } from '@ngrx/store';

import {Attraction, Ticket} from '../../../interfaces/models';
import { RideSummary } from '../../../interfaces/ride-summary.interface';
import { UserState } from '../user.reducer';
import { userSelector } from '../user.selectors';
import { RideSummaryState } from './ride-summary.reducer';

const getRideSummaryState = createSelector(userSelector, (state: UserState): RideSummaryState => {
    return state['rideSummary'];
});

const getRideSummary = createSelector(getRideSummaryState, (state: RideSummaryState): RideSummary => {
    return state.rideSummary;
});

const getAttraction = createSelector(getRideSummary, (rideSummary: RideSummary): Attraction | null => {
    return rideSummary.attraction ?? null;
});

const getAttractionName = createSelector(getRideSummary, (rideSummary: RideSummary): string | null => {
    return rideSummary.attraction?.name ?? null;
});

const getTicketArray = createSelector(getRideSummary, (rideSummary: RideSummary): Ticket[] | null => {
    return rideSummary.tickets ?? null;
});

const getTicketCount = createSelector(getTicketArray, (tickets: Ticket[] | null): number| null => {
    return tickets?.length ?? null;
});

export const rideSummarySelectors = {
    getRideSummary,
    getAttractionName,
    getAttraction,
    getTicketArray,
    getTicketCount
};
