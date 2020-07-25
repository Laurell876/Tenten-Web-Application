import React from 'react';
import Navbar from "../components/navbar";
import { Container, Row, Col } from "react-bootstrap";
import Listing from "../components/listing";
import Grid from "@material-ui/core/Grid";


export default function FavoriteListingsScreen() {
    return (<div id="favorite_listings_screen">
        <Navbar />
        <Container>
            <div id="favorites_screen_heading">Favorite Listings</div>
            <div id="all_favorite_listings">
                <Grid spacing={3} container>
                    <Listing id="favorited_listing" favorited={true} />
                    <Listing id="favorited_listing" favorited={true} />
                    <Listing id="favorited_listing" favorited={true} />
                    <Listing id="favorited_listing" favorited={true} />
                </Grid>
            </div>
        </Container>
    </div>)
}