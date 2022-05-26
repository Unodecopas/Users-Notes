import React from "react";
import "./loginForm.css";
import LoginButton from "../../components/buttons/LoginButton";
import "./registerForm.css";

const RegisterForm = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    console.log("form");
  };
  return (
    <form className="register-form" onSubmit={handleRegister}>
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
      <label htmlFor="name">
        <input type="text" name="name" id="name" placeholder="Name" />
      </label>
      <label htmlFor="lastname">
        <input
          type="text"
          name="lastname"
          id="lastname"
          placeholder="Lastname"
        />
      </label>
      <label htmlFor="email">
        <input type="email" name="email" id="email" placeholder="Email" />
      </label>
      <LoginButton text="Register" />
    </form>
  );
};

export default RegisterForm;
