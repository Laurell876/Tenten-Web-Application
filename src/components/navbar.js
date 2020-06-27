import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
} from "react-bootstrap";

export default function BootstrapNavbar() {
  return (
    <Navbar expand="lg" id="bootstrap-navbar">
      <Navbar.Brand id="navbar-brand">Tenten</Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link>Home</Nav.Link>
          <Nav.Link>Favorites</Nav.Link>
          <Nav.Link>Chats</Nav.Link>
          <Nav.Link>Profile</Nav.Link>
        </Nav>
        <Form inline>
        <FormControl
          type="text"
          placeholder="Search Tenten"
          className="ml-sm-2"
          id="navbar-search-field"
        />
      </Form>
      </Navbar.Collapse>
      
      
    </Navbar>
  );
}
