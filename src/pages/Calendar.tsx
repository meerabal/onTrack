import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import React from "react";
import { Task, User } from "../types";

interface CalendarPageInterface {
  user: User;
  completeEvent: (task: Task) => void;
}

const CalendarPage = ({ user, completeEvent }: CalendarPageInterface) => {
  const [value, setValue] = React.useState<Date>(new Date());

  const onChange = (nextValue: any) => {
    setValue(nextValue);
  };

  const onChecked = (task: Task) => {
    task.complete = !!!task.complete;
    completeEvent(task);
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
              <div style={{ flexDirection: "row" }}>
                <input
                  type="checkbox"
                  defaultChecked={task.complete}
                  onChange={() => onChecked(task)}
                />
                {!task.complete && (
                  <label>
                    {task.name} -- {task.course} -- {task.date.toDateString()}
                  </label>
                )}
                {task.complete && (
                  <s>
                    {task.name} -- {task.course} -- {task.date.toDateString()}
                  </s>
                )}
                <br />
              </div>
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
