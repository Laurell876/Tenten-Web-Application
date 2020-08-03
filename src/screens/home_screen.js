import React, { useEffect } from "react";
import Navbar from "../components/navbar";
import LatestListings from "../components/home_screen_components/latest_listings";
import { Container, Row, Col } from "react-bootstrap";
import TopListings from "../components/home_screen_components/top_listings";
import AllListings from "../components/home_screen_components/all_listings";
import Sidebar from "../components/home_screen_components/sidebar";
import { useQuery, useMutation } from "@apollo/react-hooks";
import auth from "../auth";
import LoadingScreen from "./loading_screen";
import { ALL_LISTINGS_HOMESCREEN, ME } from "../graphql/queries";
import { connect } from "react-redux";
import { compareRent, compareBedrooms, compareBathrooms } from "../helperFunctions/comparison_functions"

function HomeScreen({
  history,
  parish,
  minRent,
  maxRent,
  minBedrooms,
  maxBedrooms,
  minBathrooms,
  maxBathrooms,
  rentSort,
  bedroomSort,
  bathroomSort,
  rating
}) {
  //console.log(bedroomSort)
  const allListingsResponse = useQuery(ALL_LISTINGS_HOMESCREEN, {
    fetchPolicy: "network-only"
  });

  const meResponse = useQuery(ME, {
    fetchPolicy: "network-only"
  });

  if (allListingsResponse.loading || meResponse.loading) {
    return <LoadingScreen />
  }

  let listings = allListingsResponse.data.listings;
  let currentUser = meResponse.data.me;
  console.log(currentUser.favoriteListings)

  //Generate All Listings
  let listingsNotOwnedByCurrentUser = listings.filter(listing => listing.owner._id !== currentUser._id);

  //Filter listings
  listingsNotOwnedByCurrentUser = listingsNotOwnedByCurrentUser.filter(listing => listing.parish == parish && listing.rent >= minRent)
    .filter(listing => maxRent ? listing.rent <= maxRent : listing)
    .filter(listing => listing.bedrooms >= minBedrooms)
    .filter(listing => maxBedrooms ? listing.bedrooms <= maxBedrooms : listing)
    .filter(listing => listing.bathrooms >= minBathrooms)
    .filter(listing => maxBathrooms ? listing.bathrooms <= maxBathrooms : listing)

  // Generate Latest Listings
  let latestListings = [];
  const numberOfListingsFromOtherUsers = listingsNotOwnedByCurrentUser.length;
  for (let i = 1; i <= 3; i++) {
    if ((numberOfListingsFromOtherUsers - i) >= 0) {
      latestListings.push(listingsNotOwnedByCurrentUser[numberOfListingsFromOtherUsers - i])
    }
  }

  // Generate Top Listings
  const topListings = listingsNotOwnedByCurrentUser.filter(listing => listing.rating === 5).slice(0, 3);

  // Sort listings in the 'All listings' section. sort by rent, bedrooms and bathrooms

  // Sort by rent
  if (rentSort !== -1) {
    const sortByRentAsc = listingsNotOwnedByCurrentUser.sort(compareRent);
    listingsNotOwnedByCurrentUser = rentSort == 0 ? sortByRentAsc : sortByRentAsc.reverse();
  }

  // Sort by bathrooms
  if (bathroomSort !== -1) {
    const sortByBathroomsAsc = listingsNotOwnedByCurrentUser.sort(compareBathrooms);
    listingsNotOwnedByCurrentUser = bathroomSort == 0 ? sortByBathroomsAsc : sortByBathroomsAsc.reverse();
  }

  // Sort by bedrooms
  if (bedroomSort !== -1) {
    const sortByBedroomsAsc = listingsNotOwnedByCurrentUser.sort(compareBedrooms);
    listingsNotOwnedByCurrentUser = bedroomSort == 0 ? sortByBedroomsAsc : sortByBedroomsAsc.reverse();
  }

  // Sort by rating
  listingsNotOwnedByCurrentUser = listingsNotOwnedByCurrentUser.filter(listing => rating ? listing.rating === rating : listing)

  return (
    <div id="home_screen">
      <Navbar />
      <Container>
        <Row>
          <Col lg={3} id="sidebar">
            <Sidebar />
          </Col>
          <Col xs={12} lg={9}>
            <LatestListings currentUser={currentUser} listings={latestListings} />
            <TopListings currentUser={currentUser} listings={topListings} />
            <AllListings currentUser={currentUser} listings={listingsNotOwnedByCurrentUser} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}



const mapStateToProps = (state) => {
  return {
    parish: state.filterReducer.parish,
    minRent: state.filterReducer.minRent,
    maxRent: state.filterReducer.maxRent,
    minBedrooms: state.filterReducer.minBedrooms,
    maxBedrooms: state.filterReducer.maxBedrooms,
    minBathrooms: state.filterReducer.minBathrooms,
    maxBathrooms: state.filterReducer.maxBathrooms,
    rentSort: state.filterReducer.rentSort,
    bedroomSort: state.filterReducer.bedroomSort,
    bathroomSort: state.filterReducer.bathroomSort,
    rating: state.filterReducer.rating
  };
};



export default connect(
  mapStateToProps
)(HomeScreen);
