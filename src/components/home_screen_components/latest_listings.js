import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import Listing from "../listing";
import history from "../history";


export default function LatestListings() {
  return (
    <div>
      <div id="home_screen_heading">
        <h1 id="home_screen_first_title">Latest Listings</h1>
        <Button variant="contained" id="filter_sort_button" onClick={()=>{
          history.push("/filter");
        }}>
          filter & sort
        </Button>
      </div>
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
