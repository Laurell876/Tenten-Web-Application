import React from 'react';
import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import { Container, Row, Col } from "react-bootstrap";



export default function ChatBubblesSection() {
    return (<div>
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
    </div>)
}