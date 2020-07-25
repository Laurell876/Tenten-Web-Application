import React from "react";
import Grid from "@material-ui/core/Grid";

import Listing from "../listing";

export default function TopListings() {
  return (
    <div>
      <h1 id="home_screen_title">Top Listings</h1>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={4}>
          <Listing />
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <Listing />
        </Grid>

        <Grid item xs={12} sm={6} lg={4}>
          <Listing />
        </Grid>

        <Grid item xs={12} sm={6} lg={4}>
          <Listing />
        </Grid>

        <Grid item xs={12} sm={6} lg={4}>
          <Listing />
        </Grid>
      </Grid>
    </div>
  );
}
