import React from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import Listing from "../listing";
import history from "../history";


export default function LatestListings({listings, currentUser}) {
  console.log(currentUser)
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

      {
          listings.map(listing => {
            return (
              <Grid item xs={12} md={6} lg={4} key={listing._id}>
                <Listing key={listing._id}
                image={listing.image}  
                title={listing.title}
                address={listing.address}
                size={listing.size}
                bedrooms={listing.bedrooms}
                bathrooms={listing.bathrooms}
                rating={listing.rating}
                rent={listing.rent}
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
