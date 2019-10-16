import * as React from "react";
import styles from "./calendar-component.module.scss";
import Calendar from "react-calendar/dist/entry.nostyle";
import "react-calendar/dist/Calendar.css";
export interface ICalendarComponentProps {
  date: Date;
  onChange: () => void;
}

const CalendarComponent = (props: ICalendarComponentProps) => (
  <div className={styles["calendar"]}>
    <Calendar onChange={props.onChange} value={props.date} />
  </div>
);

export { CalendarComponent };
