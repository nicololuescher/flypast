import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { RideHttp } from '../interfaces/api-models';
import { Ride, RideContent } from '../interfaces/models';
import { parseBaseDates } from '../utils/date-parse.util';

@Injectable({
    providedIn: 'root'
})
export class RideService {
    constructor(private http: HttpClient) {}

    storeRide(ride: RideContent): Observable<Ride> {
        return this.http.post<RideHttp>(environment.baseUrl + 'rides', ride).pipe(
            map((ride) => {
                return {
                    ...ride,
                    ...parseBaseDates(ride)
                };
            })
        );
    }
}
