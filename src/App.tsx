import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage, CalendarPage } from "./pages";
import "./App.css";

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
