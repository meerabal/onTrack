import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Task, User } from "./types";
import { HomePage, CalendarPage, LoginPage } from "./pages";
import "./App.css";
import React from "react";

// all routes should get User(s)
const routes = ["home", "calendar"];

function App() {
  let loggedInUserString = sessionStorage.getItem("currentUser");
  const loggedInUser = loggedInUserString
    ? JSON.parse(loggedInUserString)
    : null;

  const [currentUser, setCurrentUser] = React.useState<User | null>(
    loggedInUser
  );

  const onSetCurrentUser = (user: User) => {
    setCurrentUser(user);
    sessionStorage.setItem("currentUser", JSON.stringify(user));
  };

  return (
    <>
      <Router>
        {/* <Header links={routes.map((name) => name)} /> */}

        {!currentUser ? (
          <LoginPage setUser={onSetCurrentUser} />
        ) : (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/calendar" element={<CalendarPage />} />
          </Routes>
        )}
      </Router>
    </>
  );
}

export default App;
