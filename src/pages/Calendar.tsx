import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import React, { useState } from "react";

const CalendarPage = () => {
  const [value, setValue] = useState<Date>(new Date());

  const onChange = (nextValue: any) => {
    setValue(nextValue);
  };

  return (
    <>
      <Calendar onChange={onChange} value={value} />
      <p>Hello Calendar</p>
      <label>Date selected: {value.toDateString()}</label>
      <br />
      <Link to="/home">Go to home</Link>
    </>
  );
};

export default CalendarPage;
