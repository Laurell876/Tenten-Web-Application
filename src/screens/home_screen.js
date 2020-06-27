import React from "react";
import Navbar from "../components/navbar";
import LatestListings from "../components/home_screen_components/latest_listings";
import { Container} from "react-bootstrap";
export default function HomeScreen() {
  return (
    <div id="home_screen">
      <Navbar />
      <Container><LatestListings /></Container>
          
    </div>
  );
}
