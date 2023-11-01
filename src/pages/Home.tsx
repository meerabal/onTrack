import { Link } from "react-router-dom";
import { User } from "../types";

interface HomePageInterface {
  user: User;
}

const HomePage = ({ user }: HomePageInterface) => {
  const upcomingEvent =
    user.events.length > 0
      ? user.events.reduce((task1, task2) =>
          task1.date < task2.date ? task1 : task2
        )
      : null;

  return (
    <>
      <h2>Welcome {user.username}!</h2>
      <Link to="/calendar">
        <button>Schedule</button>
      </Link>
      <Link to="/event/add">
        <button>Add Event</button>
      </Link>
      <Link to="/courses">
        <button>Courses</button>
      </Link>
      {upcomingEvent ? (
        <p>
          Upcoming event: {upcomingEvent.name} --{" "}
          {upcomingEvent.date.toDateString()} -- {upcomingEvent.course}
        </p>
      ) : (
        "No upcoming events"
      )}
    </>
  );
};

export default HomePage;
