import React from "react";
import ChatBubbles from "../components/chat_bubbles_section";
import Navbar from "../components/navbar";
import { Container, Row, Col } from "react-bootstrap";



export default function ChatBubblesScreen() {
    return (<div >
        <Navbar />
        <Container>
            <ChatBubbles />
        </Container>
    </div>)
}