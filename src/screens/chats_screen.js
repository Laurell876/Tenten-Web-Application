import React from "react";
import Navbar from "../components/navbar";
import { Container, Row, Col } from "react-bootstrap";
import WebChatScreen from "../components/chat_screen_components/web_chat_screen";
import MobileChatScreen from "../components/chat_screen_components/mobile_chat_screen";

export default function ChatsScreen() {
    return (<div id="chats_screen">
        <Navbar />

        <Container>
            <Row>   
                <Col lg={12} id="chat_screen_web">
                    <WebChatScreen />
                </Col>
                <Col md={12} id="chat_screen_mobile">
                    <MobileChatScreen />
                </Col>
            </Row>
        </Container>
    </div>)
}