import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';
export default function ChatBubbleSectionWeb() {
    return (<div id="chat_bubble_section_web">
        <div id="bubble_section_heading">
            Elizabeth Williams
        </div>
        <div id="bubbles"></div>
        <div id="send_message_section">
            <input id="send_message_input" type="text" placeholder="Write A Message" />
            <IconButton id="icon_button" color="inherit">
                <SendIcon />
            </IconButton>
        </div>
    </div>)
}