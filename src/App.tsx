import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Course, Task, User } from "./types";
import {
  HomePage,
  CalendarPage,
  LoginPage,
  AddEventPage,
  CoursePage,
} from "./pages";
import "./App.css";
import React from "react";
import { Header } from "./components";

// all routes should get User(s)
const routes = ["home", "calendar"];

function App() {
  const userList = React.useRef<User[]>([]);
  const [currentUser, setCurrentUser] = React.useState<User | null>();

  const registerUser = (user: User) => {
    userList.current.push(user);
    setCurrentUser(user);
  };

  const loginUser = (username: string, password: string) => {
    console.log(userList.current);
    for (const user of userList.current) {
      if (user.username === username && user.password === password) {
        setCurrentUser(user);
      }
      return true;
    }
    return false;
  };

  const logout = () => {
    setCurrentUser(null);
  };

  const addEvent = (task: Task) => {
    currentUser?.events.push(task);
    currentUser && setCurrentUser(currentUser);
  };

  const addCourse = (course: Course) => {
    currentUser?.courses.push(course);
    currentUser && setCurrentUser(currentUser);
  };

  const completeEvent = (task: Task) => {
    if (!currentUser?.events) {
      return;
    }
    let tempCurrentUser = { ...currentUser };
    for (let i = 0; i < currentUser.events.length; i++) {
      let event = tempCurrentUser.events[i];
      if (event.name === task.name && event.course === task.course) {
        tempCurrentUser.events[i].complete = task.complete;
        setCurrentUser(tempCurrentUser);
        break;
      }
    }
  };

  return (
    <>
      <Router>
        {currentUser ? <Header user={currentUser} logout={logout} /> : null}

        {!currentUser ? (
          <LoginPage setUser={registerUser} getUser={loginUser} />
        ) : (
          <Routes>
            <Route path="/" element={<HomePage user={currentUser} />} />
            <Route path="/home" element={<HomePage user={currentUser} />} />
            <Route
              path="/calendar"
              element={
                <CalendarPage
                  user={currentUser}
                  completeEvent={completeEvent}
                />
              }
            />
            <Route
              path="/event/add"
              element={<AddEventPage user={currentUser} addEvent={addEvent} />}
            />
            <Route
              path="/courses"
              element={<CoursePage user={currentUser} addCourse={addCourse} />}
            />
          </Routes>
        )}
      </Router>
    </>
  );
}

export default App;
