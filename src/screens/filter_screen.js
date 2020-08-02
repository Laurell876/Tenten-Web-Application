import React from "react";
import Navbar from "../components/navbar";
import { Container} from "react-bootstrap";
import Sidebar from "../components/home_screen_components/sidebar";

export default function FilterScreen() {
  return (
    <div>
      <Navbar />
      <Container id="sidebar_screen">
        <Sidebar />
      </Container>
    </div>
  );
}
