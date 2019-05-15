import { Component, Input } from '@angular/core';
import { WeekCalendar } from '../class/WeekCalendar';

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.scss']
})
export class WeekComponent {

    @Input() week: WeekCalendar;

}
