import React from 'react';
import Navbar from "../components/navbar";
import { Container } from "react-bootstrap";
import Listing from "../components/listing";
import Grid from "@material-ui/core/Grid";
import { useQuery, useMutation } from "@apollo/react-hooks";
import LoadingScreen from "./loading_screen";
import { ME } from "../graphql/queries";


export default function FavoriteListingsScreen() {
    const meResponse = useQuery(ME, {
        fetchPolicy: "network-only"
    });

    if (meResponse.loading) {
        return <LoadingScreen />
    }

    let currentUser = meResponse.data.me;
    let listings = currentUser.favoriteListings;
    console.log(listings)




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
                    {
                        listings.map(listing => {
                            return (
                                <Grid item xs={12} md={6} lg={4} key={listing._id}>
                                    <Listing key={listing._id}
                                        listing={listing}
                                        favorited={
                                            () => true
                                        }
                                    />
                                </Grid>
                            )
                        })
                    }

                </Grid>
            </div>
        </Container>
    </div>)
}