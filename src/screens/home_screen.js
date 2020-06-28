import React from "react";
import Navbar from "../components/navbar";
import LatestListings from "../components/home_screen_components/latest_listings";
import { Container, Row, Col } from "react-bootstrap";
import TopListings from "../components/home_screen_components/top_listings";
import AllListings from "../components/home_screen_components/all_listings";
import Sidebar from "../components/home_screen_components/sidebar";

export default function HomeScreen() {
  return (
    <div id="home_screen">
      <Navbar />
      <Container>
        <Row>
          <Col lg={3} id="sidebar">
            <Sidebar />
          </Col>
          <Col xs={12} lg={9}>
            <LatestListings />
            <TopListings />
            <AllListings />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
