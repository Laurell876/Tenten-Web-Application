import React from "react";
import Navbar from "../components/navbar";
import { Container, Row, Col } from "react-bootstrap";
import SingleChat from "../components/single_chat";
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';

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
                    <div id="chat_section_heading">Elizabeth Williams</div>

                    <div id="chat_bubbles_and_send_message_field">

                        <div id="chat_bubbles">
                            <div id="received_message_bubble_section">
                                <div id="received_message_bubble">
                                    Hello There!
                                </div>
                            </div>

                            <div id="received_message_bubble_section">
                                <div id="received_message_bubble">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies, diam ut gravida scelerisque, turpis sem mattis orci, at viverra risus orci a mauris. Vivamus lacinia enim neque, eget iaculis enim ornare non. Nunc convallis nisi condimentum imperdiet tempor. 
                                </div>
                            </div>

                            <div id="sent_message_bubble_section">
                                <div id="sent_message_bubble">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </div>
                            </div>


                            <div id="received_message_bubble_section">
                                <div id="received_message_bubble">
                                    Hello There!
                                </div>
                            </div>

                            <div id="received_message_bubble_section">
                                <div id="received_message_bubble">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies, diam ut gravida scelerisque, turpis sem mattis orci, at viverra risus orci a mauris. Vivamus lacinia enim neque, eget iaculis enim ornare non. Nunc convallis nisi condimentum imperdiet tempor. 
                                </div>
                            </div>

                            <div id="sent_message_bubble_section">
                                <div id="sent_message_bubble">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </div>
                            </div>

                        </div>

                        <div id="send_message_field">
                            <TextField fullWidth={true} id="send_message_input" placeholder="Write A Message" variant="outlined" />
                            <IconButton id="send_icon" color="inherit">
                                <SendIcon />
                            </IconButton>
                        </div>

                    </div>


                </Col>
            </Row>
        </Container>
    </div>)
}