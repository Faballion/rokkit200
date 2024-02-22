import { Component } from '@angular/core';
import { AvailabilityService } from '../availability.service';

@Component({
    selector: 'app-availability-calendar',
    templateUrl: './availability-calendar.component.html',
    styleUrl: './availability-calendar.component.scss'
})
export class AvailabilityCalendarComponent {
    constructor(private availabilityService: AvailabilityService) {}

    ngOnInit(): void {
        this.availabilityService.getAvailabilityData().subscribe((data) => {
            console.log('I have gotten the data!', data);
        });

        this.checkSlotAvailability(9, 1, '2016-05-20', [9, 10, 14, 15, 16, 17]); // => AVAILABLE
        this.checkSlotAvailability(10, 1, '2016-05-20', [9, 10, 14, 15, 16, 17]); // => UNAVAILABLE
        this.checkSlotAvailability(11, 1, '2016-05-20', [9, 10, 14, 15, 16, 17]); // => FULL
    }

    checkSlotAvailability(time: number, jobLength: number, date: string, availability: number[]) {}
}
