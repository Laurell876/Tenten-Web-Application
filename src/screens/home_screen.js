import React from "react";
import Navbar from "../components/navbar";
import LatestListings from "../components/home_screen_components/latest_listings";
import { Container} from "react-bootstrap";
import TopListings from "../components/home_screen_components/top_listings";
import AllListings from "../components/home_screen_components/all_listings";


export default function HomeScreen() {
  return (
    <div id="home_screen">
      <Navbar />
      <Container>
      <LatestListings />
      <TopListings />
      <AllListings />

      </Container>
          
    </div>
  );
}
