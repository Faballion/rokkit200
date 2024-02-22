import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvailabilityCalendarComponent } from './availability-calendar/availability-calendar.component';
import { AvailabilityService } from './availability.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [AppComponent, AvailabilityCalendarComponent],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule],
    providers: [AvailabilityService],
    bootstrap: [AppComponent]
})
export class AppModule {}
