import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';


export default function ChatBubbleSectionWeb({ currentChat, me}) {


    return (<div id="chat_bubble_section_web">
        <div id="bubble_section_heading">
            Elizabeth Williams
        </div>
        <div id="bubbles">

            {
                currentChat ? currentChat.messages.map(message => {
                    if (message.receiver._id == me._id) {
                        return (<div id="message_received_bubble_section">
                            <div id="received_bubble">
                                {message.text}
                            </div>
                        </div>)
                    } else {
                        return (<div id="message_sent_bubble_section">
                            <div id="sent_bubble">
                                {message.text}
                            </div>
                        </div>)
                    }
                }) : null
            }
        </div>

        <div id="send_message_section">
            <input id="send_message_input" type="text" placeholder="Write A Message" />
            <IconButton id="icon_button" color="inherit">
                <SendIcon />
            </IconButton>
        </div>
    </div>)
}