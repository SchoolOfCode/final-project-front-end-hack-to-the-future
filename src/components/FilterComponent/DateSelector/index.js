import * as React from "react";
import css from "./DateSelector.module.css";

export default function DateSelector({ handleDateChange }) {
  return (
    <div>
      <input
        className={css.input}
        type="date"
        id="dateFilter"
        name="dateFilter"
        // limit date input to today onwards only
        min={new Date().toISOString().slice(0, 10)}
        onChange={(e) => handleDateChange(e.target.value)}
      ></input>
    </div>
  );
}
