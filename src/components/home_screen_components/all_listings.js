import React from "react";
import Grid from "@material-ui/core/Grid";

import Listing from "../listing";

export default function AllListings({ listings, currentUser }) {

  return (
    <div>
      <h1 id="home_screen_title">All Listings</h1>
      <Grid container spacing={2}>
      {
          listings.map(listing => {
            return (
              <Grid item xs={12} md={6} lg={4} key={listing._id}>
                <Listing key={listing._id}
                listing={listing}
                favorited={
                  () => currentUser.favoriteListings.filter(favoritedListing => favoritedListing._id == listing._id).length > 0
                }
                />
              </Grid>
            )
          })
        }
      </Grid>
    </div>
  );
}
