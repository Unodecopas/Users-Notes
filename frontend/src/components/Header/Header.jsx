import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="app-header">
      <Link to="/">
        <h1>Notes</h1>
      </Link>
      <div className="user-info">
        <Link to="login">
          <button>Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
