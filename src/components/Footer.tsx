import { Link } from "react-router-dom";
import { User } from "../types";

interface FooterInterface {
  logout: () => void;
}

const Footer = ({ logout }: FooterInterface) => (
  <div style={{ paddingTop: "20px" }}>
    <Link to="/calendar">
      <button className="footer-button">Calendar</button>
    </Link>
    <Link to="/home">
      <button className="footer-button">Home</button>
    </Link>
    <button onClick={logout} className="footer-button">
      Logout
    </button>
  </div>
);

export default Footer;
