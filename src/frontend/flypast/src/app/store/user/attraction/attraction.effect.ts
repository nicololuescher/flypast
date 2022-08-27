import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';

import {attractionActions} from "./attraction.actions";
import {AttractionService} from "../../../services/attraction.service";

@Injectable()
export class AttractionEffect {
    constructor(private actions$: Actions, private attractionService: AttractionService) {}

    public fetchTicket$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(attractionActions.fetchAttractions),
            switchMap((action) => {
                return this.attractionService.fetchAttractions().pipe(
                    map((response) =>
                        attractionActions.storeAttractions({
                            response
                        })
                    )
                );
            })
        );
    });
}
