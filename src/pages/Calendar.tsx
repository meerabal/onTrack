import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import React from "react";
import { Task, User } from "../types";
import { Link } from "react-router-dom";

/* schedule page with events for the selected date
  currently only supports month view */
interface CalendarPageInterface {
  user: User;
  completeEvent: (task: Task) => void;
  courseList: any;
}

const CalendarPage = ({
  user,
  completeEvent,
  courseList,
}: CalendarPageInterface) => {
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
      <Calendar className="calendar" onChange={onChange} value={value} />
      <h2>Upcoming events</h2>
      <label>Date selected: {value.toDateString()}</label>
      <br />
      {user.events.length < 1 && <p>No events on this day</p>}
      {value &&
        user.events.map((task: Task) => {
          return (
            task.date.toDateString() === value.toDateString() && (
              <div className="row-div">
                <input
                  type="checkbox"
                  defaultChecked={task.complete}
                  onChange={() => onChecked(task)}
                />
                {!task.complete && (
                  <label style={{ color: courseList[task.course]?.color }}>
                    {task.name} -- {task.course} -- {task.date.toDateString()}
                  </label>
                )}
                {task.complete && (
                  <s style={{ color: courseList[task.course]?.color }}>
                    {task.name} -- {task.course} -- {task.date.toDateString()}
                  </s>
                )}
                <br />
              </div>
            )
          );
        })}
      <Link to="/event/add">
        <button className="small-button">Add an event</button>
      </Link>
    </>
  );
};

export default CalendarPage;
