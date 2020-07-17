import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";
import LoginScreen from "../screens/auth_screens/login_screen";
import SignupScreen from "../screens/auth_screens/signup_screen";
import HomeScreen from "../screens/home_screen";
import FilterScreen from "../screens/filter_screen";
import ChatsScreen from "../screens/chats_screen";
import ChatBubblesScreen from "../screens/chat_bubbles_screen"


export default function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={LoginScreen} />
        <Route path="/signup" exact component={SignupScreen} />
        <Route path="/home" exact component={HomeScreen} />
        <Route path="/filter" exact component={FilterScreen} />
        <Route path="/chats" exact component={ChatsScreen} />
        <Route path="/chatsbubbles" exact component={ChatBubblesScreen} />
      </Switch>
    </Router>
  );
}