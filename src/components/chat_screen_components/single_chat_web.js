import React from 'react';
import modelImage from "../../images/model.jpg";


export default function SingleChat({active}) {
    return (
    <div id="single_chat_container">
        <div id="single_chat">
            <img
                src={modelImage}
                alt="Auth Screen"
                id="chat_selection_user_image"
            />
            <div id="name_and_last_message">
                <span id="user_name">Elizabeth Williams</span>
                <span id="message_and_time">
                    <span>Hi</span>
                    <span>8:36 am</span>
                </span>
            </div>

        </div>
        {active ? 
            
            <div id="active_chat_icon"></div>

        : null}

    </div>
    );
}