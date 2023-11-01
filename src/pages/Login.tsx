import React from "react";
import { User } from "../types";
import { useNavigate } from "react-router-dom";

/* Login / register page for the user */
interface LoginPageInterface {
  setUser: (user: User) => void;
  loginUser: (username: string, password: string) => boolean;
}

const LoginPage = ({ setUser, loginUser }: LoginPageInterface) => {
  const navigate = useNavigate();

  const username = React.useRef<string>("");
  const password = React.useRef<string>("");

  const updateUsername = (event: any) => {
    username.current = event.target.value;
  };

  const updatePassword = (event: any) => {
    password.current = event.target.value;
  };

  /* registers the user if they do not exist, else logs them in */
  const register = () => {
    if (username.current === "" || password.current === "") {
      alert("Please check your input");
      return;
    }
    if (!loginUser(username.current, password.current)) {
      const newUser = {
        username: username.current,
        password: password.current,
        events: [],
        courses: [],
      };
      setUser(newUser);
    }
    navigate("/");
  };

  /* logs in the user if they exist */
  const login = () => {
    if (username.current === "" || password.current === "") {
      alert("Please check your input");
      return;
    }
    if (loginUser(username.current, password.current)) {
      navigate("/");
    } else {
      alert("You do not have an account, please register");
    }
  };

  return (
    <>
      <h1>Register or login</h1>
      <br />
      <label>Username: </label>
      <input placeholder={"username"} onChange={updateUsername} />
      <br />
      <label>Password: </label>
      <input
        type="password"
        placeholder={"password"}
        onChange={updatePassword}
      />
      <br />
      <button onClick={register} className="small-button">
        Register
      </button>
      <button onClick={login} className="small-button">
        Login
      </button>
    </>
  );
};

export default LoginPage;
