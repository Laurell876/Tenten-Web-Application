import React from "react";
import Navbar from "../components/navbar";
import { Container, Row, Col } from "react-bootstrap";
import SingleChat from "../components/single_chat";

import SearchIcon from '@material-ui/icons/Search';

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
                        <SearchIcon id="search_icon" />
                        <input type="text" placeholder="Search Chats" id="search_chats" />
                    </div>
                    <div id="chats_with_users">
                        <SingleChat />
                        <SingleChat />
                        <SingleChat />
                        <SingleChat />
                        <SingleChat />
                        <SingleChat />
                        <SingleChat />

                    </div>
                </Col>
                <Col lg={9} md={12} id="chat_section">
                    Chat section
                </Col>
            </Row>
        </Container>
    </div>)
}