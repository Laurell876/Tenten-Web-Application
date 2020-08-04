import React,{useState} from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
} from "react-bootstrap";


import SimpleMenu from "./navbar_pop_up_menu";

import { useHistory } from "react-router-dom";

export default function BootstrapNavbar() {
  let history = useHistory();
  const [query, setQuery] = useState('');


  const _handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      history.push({
        pathname: '/search-results',
        search: `?query=${query}`,
        state: { query: query }
    });
    }
  }

  function MenuComponent({onClickFunction, ariaHasPopup, ariaControls}) {
    return (
      <Nav.Link onClick={onClickFunction} aria-controls={ariaControls} aria-haspopup={ariaHasPopup}>
        Profile
      </Nav.Link>
    )
  }
  
  return (
    <Navbar expand="lg" id="bootstrap-navbar">
      <Navbar.Brand id="navbar-brand" onClick={()=>{
        history.push("/home")
      }}>Tenten</Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">

        <Nav className="ml-auto">
          
          <Nav.Link id="nav_link" onClick={()=>{
            history.push("/home")
          }}>
            Home
          </Nav.Link>


          <Nav.Link id="nav_link" onClick={()=>{
            history.push("/favorite-listings")
          }}>
            Favorites
          </Nav.Link>

          <Nav.Link id="nav_link" onClick={()=>{
            history.push("/my-listings")
          }}>My Listings</Nav.Link>

          <Nav.Link id="nav_link" onClick={()=>{
            history.push("/chats")
          }}>
            Chats
          </Nav.Link>
          

          <SimpleMenu Component={MenuComponent}/>

        </Nav>
        <Form inline>
        <FormControl
          type="text"
          placeholder="Search Tenten"
          className="ml-sm-2"
          id="navbar-search-field"
          onChange={(e)=>{
            setQuery(e.target.value)
          }}
          onKeyDown={_handleKeyDown}
        />
      </Form>
      </Navbar.Collapse>
      
      
    </Navbar>
  );
}
