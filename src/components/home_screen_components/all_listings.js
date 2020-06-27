import React from "react";
import Grid from "@material-ui/core/Grid";

import Listing from "../listing";

export default function AllListings() {
  return (
    <div>
      <h1 id="home_screen_title">All Listings</h1>
      <Grid container spacing={3}>
        <Listing />
        <Listing />
        <Listing />
        <Listing />
        <Listing />
        <Listing />
        <Listing />
        <Listing />
        <Listing />
        <Listing />
      </Grid>
    </div>
  );
}
