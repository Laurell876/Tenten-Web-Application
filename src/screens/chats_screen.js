import React from "react";
import Navbar from "../components/navbar";
import { Container, Row, Col } from "react-bootstrap";

export default function ChatsScreen() {
    return (<div id="chats_screen">
        <Navbar />

        <Container id="chat_container">
            <Row>
                <Col lg={3} id="all_chats">
                    <div id="all_chats_heading">
                        Chats
                    </div>
                    <div id="chats_search">
                        <span>Search Chats</span>
                    </div>
                </Col>
                <Col lg={9} md={12} id="chat_section">
                    Chat section
                </Col>
            </Row>
        </Container>
    </div>)
}