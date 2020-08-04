import React from "react";
import Navbar from "../components/navbar";
import { Container } from "react-bootstrap";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import IconButton from "@material-ui/core/IconButton";
import Listing from "../components/listing";
import Grid from "@material-ui/core/Grid";
import history from "../components/history";
import { ME} from "../graphql/queries";
import LoadingScreen from "./loading_screen";
import { useQuery, useMutation } from "@apollo/react-hooks";


export default function () {
    const meResponse = useQuery(ME, {
        fetchPolicy: "network-only"
    });


    if (meResponse.loading) {
        return <LoadingScreen />
    }

    let currentUser = meResponse.data.me;
    let listings = currentUser.createdListings;

    return (<div id="my_listings_screen">
        <Navbar />
        <Container>
            <div id="my_listings_header">
                <div id="my_listings_heading">My Listings</div>
                <IconButton id="add_icon_button" onClick={() => {
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
      {
          listings.map(listing => {
            return (
              <Grid item xs={12} md={6} lg={4} key={listing._id}>
                <Listing key={listing._id}
                listing={listing}
                owned_by_current_user={true}
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
        </Container>
    </div>)
}