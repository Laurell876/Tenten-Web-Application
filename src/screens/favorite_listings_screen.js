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
    let favoritedListings = currentUser.favoriteListings;

    
    

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
                        favoritedListings.map(listing => {
                            return (
                                <Grid item xs={12} sm={6} md={4} lg={3} key={listing._id}>
                                    <Listing key={listing._id}
                                        id={listing._id}
                                        image={listing.image}
                                        title={listing.title}
                                        address={listing.address}
                                        size={listing.size}
                                        bedrooms={listing.bedrooms}
                                        bathrooms={listing.bathrooms}
                                        rating={listing.rating}
                                        rent={listing.rent}
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