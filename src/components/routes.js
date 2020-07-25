import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";
import LoginScreen from "../screens/auth_screens/login_screen";
import SignupScreen from "../screens/auth_screens/signup_screen";
import HomeScreen from "../screens/home_screen";
import FilterScreen from "../screens/filter_screen";
import ChatsScreen from "../screens/chats_screen";
import SingleListingScreen from "../screens/single_listing_screen";
import FavoriteListingsScreen from "../screens/favorite_listings_screen";
import MyListingsScreen from "../screens/my_listings_screen";
import SearchResultsScreen from "../screens/search_results_screen";
import UserProfileScreen from "../screens/user_profile_screen";
import AddListingScreen from "../screens/add_listing_screen";


export default function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={LoginScreen} />
        <Route path="/signup" exact component={SignupScreen} />
        <Route path="/home" exact component={HomeScreen} />
        <Route path="/filter" exact component={FilterScreen} />
        <Route path="/chats" exact component={ChatsScreen} />
        <Route path="/single-listing-screen" exact component={SingleListingScreen} />
        <Route path="/favorite-listings" exact component={FavoriteListingsScreen} />
        <Route path="/my-listings" exact component={MyListingsScreen} />
        <Route path="/search-results" exact component={SearchResultsScreen} />
        <Route path="/user-profile" exact component={UserProfileScreen} />
        <Route path="/add-listing" exact component={AddListingScreen} />
      </Switch>
    </Router>
  );
}