import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import React from "react";
import { Task, User } from "../types";

interface CalendarPageInterface {
  user: User;
}

const CalendarPage = ({ user }: CalendarPageInterface) => {
  const [value, setValue] = React.useState<Date>(new Date());

  const onChange = (nextValue: any) => {
    setValue(nextValue);
  };

  return (
    <>
      <Calendar onChange={onChange} value={value} />
      <p>Hello {user.username}! Here's your Calendar</p>
      <label>Date selected: {value.toDateString()}</label>
      <br />
      {value &&
        user.events.map((task: Task) => {
          return (
            task.date.toDateString() === value.toDateString() && (
              <p>
                {task.name} -- {task.course} -- {task.date.toDateString()}
              </p>
            )
          );
        })}
      <Link to="/home">
        <button>Home</button>
      </Link>
    </>
  );
};

export default CalendarPage;
