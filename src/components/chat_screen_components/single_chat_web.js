import React from 'react';
import modelImage from "../../images/model.jpg";


export default function SingleChat({ active, functionToRunOnClick, chat, otherUser }) {


    let timeFormatted;
    if (chat.lastMessage) {
        let dateFromMongo = Date.parse(chat.lastMessage.createdAt)
        let d = new Date(dateFromMongo);
        var minutes = d.getMinutes();
        var hour = d.getHours();

        minutes = minutes>10 ? minutes.toString() : "0" + minutes.toString(); //add 0 to minutes if its less than 10

        timeFormatted = hour.toString() + ":" + minutes;
    }



    return (
        <div id="single_chat_container" onClick={
            () => functionToRunOnClick(chat)
        }>
            <div id="single_chat">
                <img
                    src={modelImage}
                    alt="Auth Screen"
                    id="chat_selection_user_image"
                />
                <div id="name_and_last_message">
                    <span id="user_name">{otherUser.firstName} {otherUser.lastName}</span>
                    {

                        chat.lastMessage
                            ?
                            (<div id="message_and_time"><span>{chat.lastMessage.text}</span>
                                <span>{timeFormatted}</span></div>)
                            : null
                    }
                </div>

            </div>
            {active ?

                <div id="active_chat_icon"></div>

                : null}

        </div>
    );
}