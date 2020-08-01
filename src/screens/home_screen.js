import React,{useEffect} from "react";
import Navbar from "../components/navbar";
import LatestListings from "../components/home_screen_components/latest_listings";
import { Container, Row, Col } from "react-bootstrap";
import TopListings from "../components/home_screen_components/top_listings";
import AllListings from "../components/home_screen_components/all_listings";
import Sidebar from "../components/home_screen_components/sidebar";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { ALL_USERS } from "../graphql/queries";
import { CREATE_LISTING } from "../graphql/mutations";
import auth from "../auth";

export default function HomeScreen({history}) {
  const [createListing, createListingMutationObject] = useMutation(CREATE_LISTING, {
    errorPolicy: "all",
    fetchPolicy: "no-cache" // doesnt store data in cache
  });
  const { loading, error, data } = useQuery(ALL_USERS, { fetchPolicy: 'network-only' }); // network only ensures data is loaded everytime the page loads ie it doesnt load data from cache  
  
  const createListingFunction = async () => {
    const createdListing = await createListing({
      variables: {
        data: {
          title: "title",
          bedrooms: 1,
          bathrooms: 1,
          address: "123 bob lane",
          city: "spanish town",
          parish: "st. catherine",
          rent: 5000,
          size: 3500
        },
      },
    });
    console.log(createdListing);
  }
  
  
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  console.log(data)







  return (
    <div id="home_screen">
      {/* <button onClick={
        ()=>{
          auth.logout(()=>{
            history.push("/")
          })
        }
      }>Logout</button> */}
      <button onClick={
        ()=>{
          createListingFunction()
        }
      }>create listing</button>
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
