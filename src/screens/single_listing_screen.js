import React from 'react';
import Navbar from "../components/navbar";
import modernMansionImage from "../images/modern-mansion.jpg";
import { Container, Row, Col } from "react-bootstrap";
import IconButton from "@material-ui/core/IconButton";
import asianModelImage from "../images/asian_model.jpg";
import modelImage from "../images/model.jpg";
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import SingleComment from "../components/single_comment";


export default function SingleListingScreen() {
    return (<div>
        <Navbar />
        <Container>
            <div id="single_listing_screen">
                <div id="listing_display_image" style={{ backgroundImage: `url(${modernMansionImage})`, backgroundSize: "cover", backgroundPosition: "center" }}></div>

                <div id="details_and_description">
                    <div id="listing_title">Modern Mansion</div>
                    <Row>
                        <Col lg={6} md={12} id="listing_details">
                            <Row>
                                <Col lg={3} md={6}>
                                    <p id="listing_rent">$50,000</p>
                                    <p id="bedrooms">2 Bedrooms</p>
                                    <p>2 Bathrooms</p>
                                    <p>3500 sqft</p>
                                </Col>
                                <Col lg={3} md={6}>
                                    <p>31 Johnson Boulevard</p>
                                    <p>Spanish Town</p>
                                    <p>St. Catherine</p>
                                </Col>
                            </Row>
                        </Col>

                        <Col lg={6} md={12} id="listing_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Col>

                        <div id="divider"></div>
                    </Row>
                </div>

                <div id="owner_and_rating">
                    <Row>
                        <Col lg={6} md={12} id="owner">
                            <div id="owner_heading">Contact Owner</div>
                            <div id="owner_image_and_name">
                                <img id="owner_image" src={asianModelImage} />
                                <div id="name_and_contact">
                                    <p id="owner_name">Ashley Brown</p>
                                    <IconButton color="inherit" id="icon_button">
                                        <ChatBubbleOutlineIcon id="chat_button" />
                                    </IconButton>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={12} id="rating">
                            <div id="rating_heading">Rate Listing</div>
                            <div id="stars">
                                {generateStars(5)}
                                <br />
                                {generateStars(4)}
                                <br />
                                {generateStars(3)}
                                <br />
                                {generateStars(2)}
                                <br />
                                {generateStars(1)}
                            </div>
                        </Col>
                        <div id="divider"></div>
                    </Row>
                </div>

                <div id="comment_section">
                    <div id="comment_section_heading">3 Comments</div>
                    <div id="user_image_and_input">
                        <img id="user_picture" src={modelImage} />
                        <input id="comment_input" type="text" placeholder="Add a public comment" />
                    </div>
                    <div id="all_comments">
                        <SingleComment />
                        <SingleComment />
                        <SingleComment />
                    </div>
                </div>


            </div>
        </Container>

    </div>)
}

const generateStars = (numOfStars) => {
    let stars = [];
    for (let i = 0; i < numOfStars; i++) {
        stars.push(<StarBorderIcon />)
    }
    return stars;
}