import { Link } from "react-router-dom";
import { User } from "../types";

interface HomePageInterface {
  user: User;
}

const HomePage = ({ user }: HomePageInterface) => {
  const upcomingEvent = user.events.reduce((task1, task2) =>
    task1.date < task2.date ? task1 : task2
  );

  return (
    <>
      <h2>Welcome to your home page {user.username}!</h2>
      <Link to="/calendar">
        <button>Schedule</button>
      </Link>
      <Link to="/event/add">
        <button>Add Event</button>
      </Link>
      <Link to="/courses">
        <button>Courses</button>
      </Link>
      <p>
        Upcoming event: {upcomingEvent.name} --{" "}
        {upcomingEvent.date.toDateString()} -- {upcomingEvent.course}
      </p>
    </>
  );
};

export default HomePage;
