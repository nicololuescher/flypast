import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Ticket } from '../interfaces/models';

@Injectable({
    providedIn: 'root'
})
export class TicketService {
    constructor(private http: HttpClient) {}

    fetchTicket(ticketNumber: string): Observable<Ticket> {
        return this.http.get<Ticket>(environment.baseUrl + 'tickets/' + ticketNumber);
    }
}
