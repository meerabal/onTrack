import { HashRouter as Router, Routes, Route } from "react-router-dom";

import { Task, User } from "./types";
import { HomePage, CalendarPage } from "./pages";
import "./App.css";

// all routes should get User(s)
const routes = ["home", "calendar"];

function App() {
  return (
    <>
      <Router>
        {/* <Header links={routes.map((name) => name)} /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/calendar" element={<CalendarPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
