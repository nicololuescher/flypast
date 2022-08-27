import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map, Observable} from 'rxjs';

import { environment } from '../../environments/environment';
import { Ticket } from '../interfaces/models';
import {TicketHttp} from "../interfaces/api-models";
import {parseBaseDates} from "../utils/date-parse.util";

@Injectable({
    providedIn: 'root'
})
export class TicketService {
    constructor(private http: HttpClient) {}

    fetchTicket(ticketNumber: string): Observable<Ticket> {
        return this.http.get<TicketHttp>(environment.baseUrl + 'tickets/' + ticketNumber).pipe(map(data => {
            return  {
                ...data,
                ...parseBaseDates(data),
                valid_at_day: new Date(data.valid_at_day)
            }
        }));
    }
}
