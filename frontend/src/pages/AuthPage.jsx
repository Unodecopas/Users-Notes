import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./authPage.css";

const AuthPage = () => {
  return (
    <main>
      <div className="auth">
        <NavLink to="register">Register</NavLink>
        <NavLink to="login">Login</NavLink>
      </div>

      <Outlet />
    </main>
  );
};

export default AuthPage;
