import React from "react";
import Navbar from "../components/navbar";
import { Container, Row, Col } from "react-bootstrap";
import SingleChat from "../components/single_chat";
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';
import ChatBubblesSection from "../components/chat_bubbles_section";
import history from "../components/history";

export default function ChatsScreen() {
    return (<div id="chats_screen">
        <Navbar />

        <Container id="chat_container">
            <Row>
                <Col lg={3} id="all_chats">
                    <div id="all_chats_heading">
                        Chats
                        <span id="number_of_chats">7</span>
                    </div>
                    <div id="chats_search">
                        <SearchIcon id="search_icon" />
                        <input type="text" placeholder="Search Chats" id="search_chats" />
                    </div>
                    <div id="chats_with_users">
                        <SingleChat />

                    </div>
                </Col>
                <Col lg={9} md={12} id="chat_section">
                    <ChatBubblesSection />
                </Col>
            </Row>
        </Container>
    </div>)
}