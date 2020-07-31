import React from "react";
import Navbar from "../components/navbar";
import LatestListings from "../components/home_screen_components/latest_listings";
import { Container, Row, Col } from "react-bootstrap";
import TopListings from "../components/home_screen_components/top_listings";
import AllListings from "../components/home_screen_components/all_listings";
import Sidebar from "../components/home_screen_components/sidebar";
import { useQuery } from "@apollo/react-hooks";
import {ALL_USERS} from "../graphql/queries"

export default function HomeScreen() {
  const { loading, error, data } = useQuery(ALL_USERS, {fetchPolicy: 'network-only'}); // network only ensures data is loaded everytime the page loads ie it doesnt load data from cache  
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  console.log(data)



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
