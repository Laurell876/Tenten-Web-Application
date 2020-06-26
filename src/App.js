import React from "react";
import "./sass/style.scss";
import LoginScreen from "./screens/auth_screens/login_screen";
import { BrowserRouter, Route } from "react-router-dom";
import SignupScreen from "./screens/auth_screens/signup_screen";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={LoginScreen} />
      <Route exact path="/signup" component={SignupScreen} />
    </BrowserRouter>
  );
}

export default App;
