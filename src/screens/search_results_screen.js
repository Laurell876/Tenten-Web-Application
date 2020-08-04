import React from 'react';
import Navbar from "../components/navbar";
import Listing from "../components/listing";
import Grid from "@material-ui/core/Grid";
import { Container, Row, Col } from "react-bootstrap";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { ALL_LISTINGS_HOMESCREEN,ME } from "../graphql/queries";
import LoadingScreen from "./loading_screen";


export default function SearchResultsScreen({location}) {
    console.log(location)
    let query;
    const queryToBeStored = location.state ? location.state.query : null;

    // For the first time the page loads store query in local storage
    if(queryToBeStored) localStorage.setItem("query", queryToBeStored)

    // If the query doesnt exist in props get it from local storage
    if(!queryToBeStored) query = localStorage.getItem("query");

    console.log(query);

    const allListingsResponse = useQuery(ALL_LISTINGS_HOMESCREEN, {
        fetchPolicy: "network-only"
      });

    const meResponse = useQuery(ME, {
        fetchPolicy: "network-only"
    });

    if (meResponse.loading || allListingsResponse.loading) {
        return <LoadingScreen />
    }

    let currentUser = meResponse.data.me;
    let listings = allListingsResponse.data.listings
                    .filter(listing => listing.title.includes(query));

    return (
        <div id='search_result_screen'>
            <Navbar />
            <Container>
                <div id="search_result_screen_heading">
                    <span id="search_heading_subtitle">Search result for</span>
                    <span id="listing_title">'Mansion'</span>
                </div>
                <Grid container spacing={3}>

                    {
                        listings.map(listing => {
                            return (
                                <Grid item xs={12} md={6} lg={4} key={listing._id}>
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
                                            () => currentUser.favoriteListings.filter(favoritedListing => favoritedListing._id == listing._id).length > 0
                                        }
                                    />
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Container>

        </div>
    )
}