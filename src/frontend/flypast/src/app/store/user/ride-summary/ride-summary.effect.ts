import { Injectable } from '@angular/core';
import {Actions, concatLatestFrom, createEffect, ofType} from '@ngrx/effects';
import {map, switchMap} from 'rxjs';
import {RideService} from "../../../services/ride.service";
import {rideSummaryActions} from "./ride-summary.actions";
import {Store} from "@ngrx/store";
import {rideSummarySelectors} from "./ride-summary.selectors";


@Injectable()
export class RideSummaryEffect {
    constructor(private actions$: Actions, private rideService: RideService, private store$: Store) {}

    public fetchTicket$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(rideSummaryActions.storeRide),
            concatLatestFrom(() => [this.store$.select(rideSummarySelectors.getRideSummary)]),
            switchMap(([_, rideSummary]) => {
             const requests: any[] = [];
                rideSummary.tickets.forEach(ticket => {
                      requests.push(this.rideService.storeRide(
                        { ticket_id: ticket.ID, attraction_id: rideSummary?.attraction?.ID ?? 0, slot_number: rideSummary?.slot_number ?? 0 })
                        .pipe(
                        map((response) => rideSummaryActions.storeRideResponse({response}))
                    ));
                });

                return requests;
            })
        );
    });
}
