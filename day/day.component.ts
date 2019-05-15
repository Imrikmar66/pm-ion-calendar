import { Component, Input } from '@angular/core';
import { PmIonCalendarService } from '../pm-ion-calendar.service';
import { DayCalendar } from '../class/DayCalendar';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent {

    @Input() day: DayCalendar;

    constructor( private calendarService: PmIonCalendarService ){}
    
    dayClicked(day: DayCalendar){
        this.calendarService.triggerDaySelect( day );
    }

}
