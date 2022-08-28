import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { FreeSlotHttp } from '../interfaces/api-models';
import { FreeChunk } from '../interfaces/free-slots.interface';
import { Attraction } from '../interfaces/models';
import { parseAttractions } from '../utils/date-parse.util';

@Injectable({
    providedIn: 'root'
})
export class FreeSlotsService {
    constructor(private http: HttpClient) {}

    fetchFreeSlots(attraction: Attraction, ticketId: number, numberOfTickets: number): Observable<FreeChunk[]> {
        return this.http.get<FreeSlotHttp[]>(environment.baseUrl + 'attractions/' + attraction.ID + '/free_rides/tickets/' + ticketId).pipe(
            map((list) => {
                return parseAttractions(list, attraction, numberOfTickets);
            })
        );
    }
}
