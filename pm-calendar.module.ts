import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PmIonCalendarComponent } from './calendar/calendar.component';
import { WeekComponent } from './week/week.component';
import { PmIonCalendarService } from './services/calendar.service';
import { DayComponent } from './day/day.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        PmIonCalendarComponent,
        WeekComponent,
        DayComponent
    ],
    exports: [
        PmIonCalendarComponent
    ],
    providers: [PmIonCalendarService]
})
export class PmCalendarModule { }
