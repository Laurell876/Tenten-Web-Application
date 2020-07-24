import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import SearchIcon from '@material-ui/icons/Search';
import SingleChatWeb from "./single_chat_web";

export default function WebChatScreen() {
    return (<div>
        <Row>
            <Col lg={3} id="all_chats">
                <div id="all_chats_heading">
                    Chats
                    <span id="number_of_chats">6</span>
                </div>
                <div id="search_chats">
                    <SearchIcon />
                    <input id="search_chats_input" type="text" placeholder="Search Chats" />
                </div>
                <div id="chat_selection_section">
                    <SingleChatWeb active={true} />
                </div>
            </Col>

            <Col lg={9}>chat bubbles</Col>

        </Row>
    </div>);
}