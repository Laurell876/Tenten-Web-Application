import React from 'react';
import Navbar from "../components/navbar";
import Listing from "../components/listing";
import Grid from "@material-ui/core/Grid";
import { Container, Row, Col } from "react-bootstrap";


export default function SearchResultsScreen() {
    return (
        <div id='search_result_screen'>
            <Navbar />
            <Container>
                <div id="search_result_screen_heading">
                    <span id="search_heading_subtitle">Search result for</span>
            <span id="listing_title">'Mansion'</span>
                </div>
                <Grid container spacing={3}>

                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Listing />
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Listing />
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Listing />
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Listing />
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Listing />
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Listing />
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Listing />
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Listing />
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Listing />
                    </Grid>
                </Grid>
            </Container>

        </div>
    )
}