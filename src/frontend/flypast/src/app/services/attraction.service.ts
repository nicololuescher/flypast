import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { AttractionHttp } from '../interfaces/api-models';
import { Attraction } from '../interfaces/models';
import { parseBaseDates } from '../utils/date-parse.util';

@Injectable({
    providedIn: 'root'
})
export class AttractionService {
    constructor(private http: HttpClient) {}

    fetchAttractions(): Observable<Attraction[]> {
        return this.http.get<AttractionHttp[]>(environment.baseUrl + 'attractions').pipe(
            map((list) => {
                return list.map((data) => {
                    return {
                        ...data,
                        ...parseBaseDates(data)
                    };
                });
            })
        );
    }
}
