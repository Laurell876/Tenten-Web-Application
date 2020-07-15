import React from 'react';
import modelImage from "../images/model.jpg";


export default function SingleChat() {
    return (<div>
         <div id="single_chat">
                            <img
                                src={modelImage}
                                alt="Auth Screen"
                                id="model_image"
                            />
                            <div id="name_and_last_message">
                                <span id="user_name">Elizabeth Williams</span>
                                <span id="message_and_time">
                                    <span>Hi</span>
                                    <span>8:36 am</span>
                                </span>
                            </div>

                        </div>

    </div>);
}