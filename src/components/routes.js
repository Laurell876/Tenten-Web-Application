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
import EditListingScreen from "../screens/edit_listing_screen";
import LoadingScreen from "../screens/loading_screen";
import NotFound from "../screens/not_found";

import { ProtectedRoute } from "../protected.route";

import UploadTest from "../fileUploadTest";

export default function Routes() {
  return (<Router history={history}>
    <Switch>
      <Route path="/" exact component={LoginScreen} />
      <Route path="/signup" exact component={SignupScreen} />
      <ProtectedRoute
        exact
        path="/home"
        component={HomeScreen}
      />
      <ProtectedRoute
        exact
        path="/chats"
        component={ChatsScreen}
      />
      <ProtectedRoute
        exact
        path="/user-profile"
        component={UserProfileScreen}
      />

      <ProtectedRoute path="/filter" exact component={FilterScreen} />
      <ProtectedRoute path="/single-listing-screen" exact component={SingleListingScreen} />
      <ProtectedRoute path="/favorite-listings" exact component={FavoriteListingsScreen} />
      <ProtectedRoute path="/my-listings" exact component={MyListingsScreen} />
      <ProtectedRoute path="/search-results" exact component={SearchResultsScreen} />
      <ProtectedRoute path="/add-listing" exact component={AddListingScreen} />
      <ProtectedRoute path="/edit-listing" exact component={EditListingScreen} />
      <ProtectedRoute path="/loading" exact component={LoadingScreen} />
      <Route path="/upload-test" exact component={UploadTest} />
      <Route path="*" component={() => "404 NOT FOUND"} />
    </Switch>
  </Router>)
}