import { Link } from "react-router-dom";
import { User } from "../types";

interface HomePageInterface {
  user: User;
}

const HomePage = ({ user }: HomePageInterface) => (
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
  </>
);

export default HomePage;
