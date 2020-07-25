import React from 'react';
import Navbar from "../components/navbar";
import { Container } from "react-bootstrap";
import Listing from "../components/listing";
import Grid from "@material-ui/core/Grid";


export default function FavoriteListingsScreen() {
    return (<div id="favorite_listings_screen">
        <Navbar />
        <Container>
            <div id="favorites_screen_heading">Favorite Listings</div>
            <div id="all_favorite_listings">
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={2}
                >
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Listing id="favorited_listing" favorited={true} />
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Listing id="favorited_listing" favorited={true} />
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Listing id="favorited_listing" favorited={true} />
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Listing id="favorited_listing" favorited={true} />
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Listing id="favorited_listing" favorited={true} />
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Listing id="favorited_listing" favorited={true} />
                    </Grid>
                </Grid>
            </div>
        </Container>
    </div>)
}