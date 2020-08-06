import React from "react";
import asianModelImage from "../images/asian_model.jpg";
import { URI } from "../constants";
import placeholder from "../images/placeholder.png"


export default function SingleComment({user, review}){
    return(<div id="single_comment">
    <div id="comment_image">
        <img id="comment_user_image" src={`${user.image ? URI + user.image : placeholder}`} alt="user_image" />
    </div>
    <div id="comment_content">
<div id="comment_user_name">{user.firstName} {user.lastName}</div>
<div id="comment_text">{review}</div>
    </div>
</div>)
}