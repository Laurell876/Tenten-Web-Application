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
      <Grid container spacing={3}>
        <Listing />
        <Listing />
        <Listing />
        <Listing />
      </Grid>
    </div>
  );
}
