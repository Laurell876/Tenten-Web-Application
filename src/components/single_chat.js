import React from 'react';
import modelImage from "../images/model.jpg";
import history from "../components/history";


export default function SingleChat() {
    return (<div>
         <div id="single_chat"  onClick={() => {
                            history.push("/chatsbubbles")
                        }}>
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