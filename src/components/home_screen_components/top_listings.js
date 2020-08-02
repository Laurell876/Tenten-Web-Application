import React from "react";
import Grid from "@material-ui/core/Grid";

import Listing from "../listing";

export default function TopListings({ listings }) {
  return (
    <div>
      <h1 id="home_screen_title">Top Listings</h1>
      <Grid container spacing={2}>
        {listings.map(listing => {
          return (
            <Grid item xs={12} md={6} lg={4}>
              <Listing
                image={listing.image}
                title={listing.title}
                address={listing.address}
                size={listing.size}
                bedrooms={listing.bedrooms}
                bathrooms={listing.bathrooms}
                rating={listing.rating}
                rent={listing.rent}
              />
            </Grid>
          )
        })}
      </Grid>
    </div>
  );
}
