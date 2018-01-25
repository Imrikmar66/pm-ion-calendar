import { MonthCalendar } from './MonthCalendar';
import { Calendar } from './Calendar';

export class DatesCalendar {

    private months: MonthCalendar[];

    constructor( from: Date, to: Date ){console.log(from, to);
        this.months = (new Calendar()).getMonthsFromTo(from, to);
    }

    getMonths(): MonthCalendar[] {
        return this.months;
    }

}