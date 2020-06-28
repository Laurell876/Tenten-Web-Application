import React from "react";
import Grid from "@material-ui/core/Grid";

import Listing from "../listing";

export default function LatestListings() {
  return (
    <div>
      <h1 id="home_screen_title">Latest Listings</h1>
      <Grid container spacing={3}>
        <Listing />
        <Listing />
        <Listing />
        <Listing />
      </Grid>
    </div>
  );
}
