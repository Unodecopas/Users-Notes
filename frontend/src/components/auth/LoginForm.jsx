import React from "react";
import "./loginForm.css";
import LoginButton from "../../components/buttons/LoginButton";

const LoginForm = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("form");
  };
  return (
    <form className="login-form" onSubmit={handleLogin}>
      <label htmlFor="username">
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
        />
      </label>
      <label htmlFor="password">
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
        />
      </label>
      <LoginButton text="Login" />
    </form>
  );
};

export default LoginForm;
