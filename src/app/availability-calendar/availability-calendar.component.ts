import { Component } from '@angular/core';
import { AvailabilityService } from '../availability.service';
import { Observable } from 'rxjs';
import { AvailabilityData } from '../models/availability-data.model';

@Component({
    selector: 'app-availability-calendar',
    templateUrl: './availability-calendar.component.html',
    styleUrl: './availability-calendar.component.scss'
})
export class AvailabilityCalendarComponent {
    availabilityData$!: Observable<AvailabilityData[]>;

    constructor(private availabilityService: AvailabilityService) {}

    ngOnInit(): void {
        this.availabilityData$ = this.availabilityService.getAvailabilityData();

        this.checkSlotAvailability(9, 1, '2016-05-20', [9, 10, 14, 15, 16, 17]); // => AVAILABLE
        this.checkSlotAvailability(10, 1, '2016-05-20', [9, 10, 14, 15, 16, 17]); // => UNAVAILABLE
        this.checkSlotAvailability(11, 1, '2016-05-20', [9, 10, 14, 15, 16, 17]); // => FULL
    }

    checkSlotAvailability(time: number, jobLength: number, date: string, availability: number[]) {}
}
