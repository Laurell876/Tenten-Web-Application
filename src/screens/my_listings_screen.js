import React from "react";
import Navbar from "../components/navbar";
import { Container } from "react-bootstrap";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import IconButton from "@material-ui/core/IconButton";
import Listing from "../components/listing";
import Grid from "@material-ui/core/Grid";
import history from "../components/history";



export default function () {
    return (<div id="my_listings_screen">
        <Navbar />
        <Container>
            <div id="my_listings_header">
                <div id="my_listings_heading">My Listings</div>
                <IconButton id="add_icon_button" onClick={()=>{
                    history.push("/add-listing")
                }} >
                    <AddCircleOutlineIcon />
                </IconButton>

            </div>

            <div id="all_my_listings">
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={2}
                >
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Listing id="favorited_listing" favorited={true} owned_by_current_user={true} />
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Listing id="favorited_listing" favorited={true} owned_by_current_user={true} />
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Listing id="favorited_listing" favorited={true} owned_by_current_user={true} />
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Listing id="favorited_listing" favorited={true} owned_by_current_user={true} />
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Listing id="favorited_listing" favorited={true} owned_by_current_user={true} />
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={3}>
                        <Listing id="favorited_listing" favorited={true} owned_by_current_user={true} />
                    </Grid>
                </Grid>
            </div>
        </Container>
    </div>)
}