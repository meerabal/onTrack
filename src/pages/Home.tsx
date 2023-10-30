import { Link } from "react-router-dom";
import { User } from "../types";

interface HomePageInterface {
  user: User;
}

const HomePage = ({ user }: HomePageInterface) => (
  <>
    <p>Welcome to your home page {user.username}!</p>
    <Link to="/calendar">Go to calendar</Link>
  </>
);

export default HomePage;
