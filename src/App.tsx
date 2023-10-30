import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Task, User } from "./types";
import { HomePage, CalendarPage, LoginPage } from "./pages";
import "./App.css";
import React from "react";
import { Header } from "./components";

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

  const logout = () => {
    setCurrentUser(null);
    sessionStorage.removeItem("currentUser");
  };

  return (
    <>
      <Router>
        {currentUser ? <Header user={currentUser} logout={logout} /> : null}

        {!currentUser ? (
          <LoginPage setUser={onSetCurrentUser} />
        ) : (
          <Routes>
            <Route path="/" element={<HomePage user={currentUser} />} />
            <Route path="/home" element={<HomePage user={currentUser} />} />
            <Route
              path="/calendar"
              element={<CalendarPage user={currentUser} />}
            />
          </Routes>
        )}
      </Router>
    </>
  );
}

export default App;
