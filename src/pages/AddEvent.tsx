import React from "react";
import { Task, User } from "../types";
import { Link, useNavigate } from "react-router-dom";

interface AddEventPageInterface {
  user: User;
  addEvent: (task: Task) => void;
}

const AddEventPage = ({ user, addEvent }: AddEventPageInterface) => {
  const navigate = useNavigate();

  const name = React.useRef<string>("");
  const course = React.useRef<string>("");

  const updateName = (event: any) => {
    name.current = event.target.value;
  };

  const updateCourse = (event: any) => {
    course.current = event.target.value;
  };

  const onAdd = () => {
    if (name.current === "") {
      alert("Please check your input");
      return;
    }
    const newEvent = {
      name: name.current,
      course: course.current,
      date: new Date(), // TODO: date custom
      complete: false,
    };
    user.events.push(newEvent);
    navigate("/calendar");
  };

  return (
    <>
      <p>New Event</p>
      <br />
      <label>Name: </label>
      <input placeholder={"event name"} onChange={updateName} />
      <label>Course: </label>
      <input placeholder={"course"} onChange={updateCourse} />
      <br />
      <button onClick={onAdd}>Add Event</button>
      <Link to="/calendar">
        <button>Back to Calendar</button>
      </Link>
    </>
  );
};

export default AddEventPage;
