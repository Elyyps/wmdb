import * as React from "react";
import "./calendar.component.scss";
import Calendar from "react-calendar/dist/entry.nostyle";
import "react-calendar/dist/Calendar.css";

export interface ICalendarComponentProps {
  date?: any;
  onChange?: any;
}

const CalendarComponent = ({ onChange, date }: ICalendarComponentProps) => (
  <div className="calendar-wrapper">
    <Calendar onChange={onChange} value={date} />
  </div>
);

export { CalendarComponent };
