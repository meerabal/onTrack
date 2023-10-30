import React from "react";
import { User } from "../types";

interface LoginPageInterface {
  setUser: (user: User) => void;
}

const LoginPage = ({ setUser }: LoginPageInterface) => {
  const username = React.useRef<string>("");
  const password = React.useRef<string>("");

  const updateUsername = (event: any) => {
    username.current = event.target.value;
    console.log(username.current);
  };

  const updatePassword = (event: any) => {
    password.current = event.target.value;
    console.log(password.current);
  };

  const login = () => {
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
  };

  return (
    <>
      <p>Hello login</p>
      <br />
      <label>Username: </label>
      <input placeholder={"username"} onChange={updateUsername} />
      <br />
      <label>Password: </label>
      <input placeholder={"password"} onChange={updatePassword} />
      <br />
      <button onClick={login}>Login</button>
    </>
  );
};

export default LoginPage;
