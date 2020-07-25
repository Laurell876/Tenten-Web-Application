import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
} from "react-bootstrap";
import history from "./history";


const _handleKeyDown = (e) => {
  e.preventDefault();
  if (e.key === 'Enter') {
    history.push("/search-results")
  }
}

export default function BootstrapNavbar() {
  return (
    <Navbar expand="lg" id="bootstrap-navbar">
      <Navbar.Brand id="navbar-brand">Tenten</Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">

        <Nav className="ml-auto">
          <Nav.Link onClick={()=>{
            history.push("/home")
          }}>
            Home
          </Nav.Link>


          <Nav.Link onClick={()=>{
            history.push("/favorite-listings")
          }}>
            Favorites
          </Nav.Link>

          <Nav.Link onClick={()=>{
            history.push("/my-listings")
          }}>My Listings</Nav.Link>

          <Nav.Link onClick={()=>{
            history.push("/chats")
          }}>
            Chats
          </Nav.Link>
          
          <Nav.Link onClick={()=>{
            history.push("/user-profile")
          }}>
            Profile
          </Nav.Link>

        </Nav>
        <Form inline>
        <FormControl
          type="text"
          placeholder="Search Tenten"
          className="ml-sm-2"
          id="navbar-search-field"
          onKeyDown={_handleKeyDown}
        />
      </Form>
      </Navbar.Collapse>
      
      
    </Navbar>
  );
}
