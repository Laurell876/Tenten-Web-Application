import React, { useState, useEffect } from 'react';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';
import LoadingScreen from "../../screens/loading_screen";
import {Spinner} from "react-bootstrap";


export default function ChatBubbleSectionWeb({ currentChat, me, sendMessage, currentChatLoading }) {

    currentChatLoading = currentChatLoading()
    console.log(currentChatLoading)

    const [text, setText] = useState("");

    let scrollRef = React.createRef();

    useEffect(() => {
        scrollRef.current.scrollTop = scrollRef.current.scrollTopMax //automatically scroll to bottom of chat bubbles div
    })

    const _handleKeyDown = (e) => {
        if (currentChat) { //Messages can only be sent if a current chat is selected
            if (e.key === 'Enter') {
                sendMessageAndClearField()
            }
        }
    }

    return (<div id="chat_bubble_section_web">
        {
            !currentChatLoading
                ?
                <div>
                    <div id="bubble_section_heading">
                        Elizabeth Williams
                    </div>
                    <div id="bubbles" ref={scrollRef}>

                        {
                            currentChat ? currentChat.messages.map(message => {
                                if (message.receiver._id == me._id) {
                                    return (<div id="message_received_bubble_section">
                                        <div id="received_bubble">
                                            <div id="message_date">{message.createdAt}</div>
                                            <hr></hr>
                                            {message.text}
                                        </div>
                                    </div>)
                                } else {
                                    return (<div id="message_sent_bubble_section">
                                        <div id="sent_bubble">
                                            <div id="message_date">{message.createdAt}</div>
                                            <hr></hr>
                                            {message.text}
                                        </div>
                                    </div>)
                                }
                            }) : null
                        }
                    </div>

                    <div id="send_message_section">
                        <input
                            id="send_message_input"
                            type="text"
                            placeholder="Write A Message"
                            value={text}
                            onChange={(e) => {
                                setText(e.target.value)
                            }}
                            onKeyDown={_handleKeyDown}
                        />
                        <IconButton id="icon_button" color="inherit" onClick={
                            () => {
                                sendMessageAndClearField();
                            }
                        }>
                            <SendIcon />
                        </IconButton>
                    </div>
                </div>
                : <div ref={scrollRef}>            <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner></div>

        }

    </div>)

    function sendMessageAndClearField() {
        sendMessage(text);
        setText("");
    }
}