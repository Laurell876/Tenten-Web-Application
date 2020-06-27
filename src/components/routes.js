import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";
import LoginScreen from "../screens/auth_screens/login_screen";
import SignupScreen from "../screens/auth_screens/signup_screen";
import HomeScreen from "../screens/home_screen";
export default function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={LoginScreen} />
        <Route path="/signup" exact component={SignupScreen} />
        <Route path="/home" exact component={HomeScreen} />

      </Switch>
    </Router>
  );
}