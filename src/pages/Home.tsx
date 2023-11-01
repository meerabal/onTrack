import { Link } from "react-router-dom";
import { User } from "../types";

interface HomePageInterface {
  user: User;
}

const HomePage = ({ user }: HomePageInterface) => (
  <>
    <p>Welcome to your home page {user.username}!</p>
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
