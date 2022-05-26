import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import LoginForm from "./components/auth/LoginForm";
import RegisterForm from "./components/auth/RegisterForm";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="auth" element={<AuthPage />}>
          <Route path="login" element={<LoginForm />} />
          <Route path="register" element={<RegisterForm />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
