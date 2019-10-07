import * as React from "react";
import styles from "./date-picker-component.module.scss";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export interface IDatePickerComponentProps {
  errorMessage?: string;
  id: string;
  includeTime?: boolean;
  label?: string;
  onBlur: (date: Date | null, id: string) => void;
  onChange: (date: Date | null, id: string) => void;
  placeholder?: string | true;
  tooltip?: string;
  value?: string | null;
}

const DatePickerComponent = (props: IDatePickerComponentProps) => {
  const [startDate, setStartDate] = React.useState<Date | null>(null);

  const placeholderText =
    props.placeholder && typeof props.placeholder !== "string" ? "Voeg een datum en tijd toe" : props.placeholder;

  React.useEffect(() => {
    props.value ? setStartDate(new Date(props.value)) : setStartDate(null);
  }, [props.value]);

  const setChangeId = (date: Date | null, event: React.SyntheticEvent<any> | undefined) => {
    props.onChange(date, props.id);
  };

  return (
    <div className={styles["date-picker"]}>
      {props.label && <label htmlFor="">{props.label}</label>}
      <div className={styles.datePickerWrapper}>
        <DatePicker
          isClearable
          placeholderText={placeholderText}
          className={styles.inputField}
          popperClassName={styles.popperClassName}
          calendarClassName={styles.calendarClassName}
          selected={startDate}
          onChange={setChangeId}
          showTimeInput={props.includeTime}
          dateFormat="dd MMM yyyy - HH:mm"
          locale="nl"
          id={props.id}
        />
      </div>
    </div>
  );
};

export { DatePickerComponent };
