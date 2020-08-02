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


function HomeScreen({ history, parish }) {
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

  //Generate All Listings
  let listingsNotOwnedByCurrentUser = listings.filter(listing => listing.owner._id !== currentUser._id);

  //Filter listings
  console.log(listingsNotOwnedByCurrentUser)
  listingsNotOwnedByCurrentUser = listingsNotOwnedByCurrentUser.filter(listing => listing.parish == parish);

  // Generate Latest Listings
  let latestListings = [];
  const numberOfListingsFromOtherUsers = listingsNotOwnedByCurrentUser.length;
  for (let i = 1; i <= 3; i++) {
    if ((numberOfListingsFromOtherUsers - i) >= 0) {
      latestListings.push(listingsNotOwnedByCurrentUser[numberOfListingsFromOtherUsers - i])
    }
  }

  // Generate Top Listings
  const topListings = listingsNotOwnedByCurrentUser.filter(listing => listing.rating === 5);
  console.log(listingsNotOwnedByCurrentUser)


  return (
    <div id="home_screen">
      <Navbar />
      <Container>
        <Row>
          <Col lg={3} id="sidebar">
            <Sidebar />
          </Col>
          <Col xs={12} lg={9}>
            <LatestListings listings={latestListings} />
            <TopListings listings={topListings} />
            <AllListings listings={listingsNotOwnedByCurrentUser} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}



const mapStateToProps = (state) => {
  return {
    parish: state.filterReducer.parish
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setParishFilterInRedux: (parish) => {
      dispatch({ type: "SET_PARISH_FILTER", payload: { parish } });
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
