import { Component, OnInit, Input } from '@angular/core';
import { DatesCalendar } from './class/DatesCalendar';
import { DATE_LANGS, DEFAULT_LANG } from './class/CalendarLangs';

@Component({
  selector: 'pm-ion-calendar',
  templateUrl: './pm-ion-calendar.component.html',
  styleUrls: ['./pm-ion-calendar.component.scss']
})
export class PmIonCalendarComponent implements OnInit {

    @Input() datestart: Date;
    @Input() dateend: Date;
    @Input() lang: string;

    now = new Date();
    displayed_months: DatesCalendar;
    str_days: string[];

    ngOnInit(){

        // Calendar configuration
        this.displayed_months = new DatesCalendar( this.datestart, this.dateend );
        if( this.lang == null ){
            this.lang = DEFAULT_LANG;
        }
        this.str_days = DATE_LANGS.days.full[this.lang];

    }

}