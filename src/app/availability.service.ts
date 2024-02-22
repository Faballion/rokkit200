import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AvailabilityData } from './models/availability-data.model';

@Injectable({
    providedIn: 'root'
})
export class AvailabilityService {
    private mockDataUrl = 'assets/mock-data.json';

    constructor(private http: HttpClient) {}

    getAvailabilityData(): Observable<AvailabilityData[]> {
        return this.http.get<AvailabilityData[]>(this.mockDataUrl);
    }
}
