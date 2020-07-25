import React from "react";
import asianModelImage from "../images/asian_model.jpg";


export default function SingleComment(){
    return(<div id="single_comment">
    <div id="comment_image">
        <img id="comment_user_image" src={asianModelImage} alt="user_image" />
    </div>
    <div id="comment_content">
        <div id="comment_user_name">Ashley Benson</div>
        <div id="comment_text">Hope you guys like my listing</div>
    </div>
</div>)
}