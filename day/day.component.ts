import { Component, Input } from '@angular/core';
import { PmIonCalendarService } from '../services/calendar.service';
import { DayCalendar } from '../class/DayCalendar';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html'
})
export class DayComponent {

    @Input() day: Date;

    constructor( private calendarService: PmIonCalendarService ){}
    
    dayClicked(day: DayCalendar){
        this.calendarService.triggerDaySelect( day );
    }

}
