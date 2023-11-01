import React from "react";
import { User } from "../types";
import { useNavigate } from "react-router-dom";

interface LoginPageInterface {
  setUser: (user: User) => void;
  getUser: (username: string, password: string) => boolean;
}

const LoginPage = ({ setUser, getUser }: LoginPageInterface) => {
  const navigate = useNavigate();

  const username = React.useRef<string>("");
  const password = React.useRef<string>("");

  const updateUsername = (event: any) => {
    username.current = event.target.value;
  };

  const updatePassword = (event: any) => {
    password.current = event.target.value;
  };

  const register = () => {
    if (username.current === "" || password.current === "") {
      alert("Please check your input");
      return;
    }
    const newUser = {
      username: username.current,
      password: password.current,
      events: [],
    };
    setUser(newUser);
    navigate("/");
  };

  const login = () => {
    if (username.current === "" || password.current === "") {
      alert("Please check your input");
      return;
    }
    if (getUser(username.current, password.current)) {
      navigate("/");
    } else {
      alert("You do not have an account, please register");
    }
  };

  return (
    <>
      <p>Hello register or login</p>
      <br />
      <label>Username: </label>
      <input placeholder={"username"} onChange={updateUsername} />
      <br />
      <label>Password: </label>
      <input placeholder={"password"} onChange={updatePassword} />
      <br />
      <button onClick={register}>Register</button>
      <button onClick={login}>Login</button>
    </>
  );
};

export default LoginPage;
