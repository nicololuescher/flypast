import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

@Injectable({
    providedIn: 'root'
})
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export class StoreFacadeService {
    constructor(private store$: Store) {}
}
