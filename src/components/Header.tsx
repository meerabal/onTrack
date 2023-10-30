import { Link } from "react-router-dom";
import { User } from "../types";

interface HeaderInterface {
  user: User;
  logout: () => void;
}

const Header = ({ user, logout }: HeaderInterface) => (
  <>
    <button onClick={logout}>Logout</button>
  </>
);

export default Header;
