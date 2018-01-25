import { Component, Input } from '@angular/core';
import { WeekCalendar } from '../class/WeekCalendar';

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html'
})
export class WeekComponent {

    @Input() week: WeekCalendar;

}
