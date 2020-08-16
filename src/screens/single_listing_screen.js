import React, { useState } from 'react';
import Navbar from "../components/navbar";
import modernMansionImage from "../images/modern-mansion.jpg";
import { Container, Row, Col } from "react-bootstrap";
import IconButton from "@material-ui/core/IconButton";
import asianModelImage from "../images/asian_model.jpg";
import modelImage from "../images/model.jpg";
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import SingleComment from "../components/single_comment";
import AlertDialog from "../components/alert_dialog";
import { URI } from "../constants";
import placeholder from "../images/placeholder.png"
import { useQuery, useMutation } from "@apollo/react-hooks";
import {
    fiveStarRatingAlert,
    fourStarRatingAlert,
    threeStarRatingAlert,
    twoStarRatingAlert,
    oneStarRatingAlert
} from "../helperFunctions/rate_listing_alert_functions";
import { RATE_LISTING, REVIEW_LISTING, START_CHAT } from "../graphql/mutations";
import { GET_LISTING_BY_ID, ME } from "../graphql/queries";
import StarsIcon from '@material-ui/icons/Stars';
import LoadingScreen from "./loading_screen";
import history from "../components/history";




export default function SingleListingScreen({ location }) {
    let listingId;

    if (location.state && location.state.listingId) {
        listingId = location.state.listingId
        localStorage.setItem("single-listing-Id", listingId)
    } else {
        listingId = localStorage.getItem("single-listing-Id")
    }

    const [reviews, setReviews] = useState();

    const [reviewBeingTyped, setReviewBeingTyped] = useState("");

    const [reviewListing, reviewListingObject] = useMutation(REVIEW_LISTING);

    const [rateListing, rateListingObject] = useMutation(RATE_LISTING);

    const [startChat, startChatObject] = useMutation(START_CHAT);


    const singleListingResponse = useQuery(GET_LISTING_BY_ID, {
        variables: {
            id: listingId
        }
    }, {
        fetchPolicy: "network-only"
    });

    const meResponse = useQuery(ME, {
        fetchPolicy: "network-only"
    });

    const [newReview, setNewReview] = useState();


    if (singleListingResponse.loading || meResponse.loading) {
        return <LoadingScreen />
    }

    let listing;
    if (singleListingResponse.data && singleListingResponse.data.listings) {
        listing = singleListingResponse.data.listings[0];
        //setReviews(listing.reviews);
    }

    let currentUser;
    if (meResponse.data && meResponse.data.me) {
        currentUser = meResponse.data.me;
    }


    function contactOwnerAlert({ functionToRunOnClick }) {
        return (
            <IconButton color="inherit" id="icon_button" onClick={functionToRunOnClick}>
                <ChatBubbleOutlineIcon id="chat_button" />
            </IconButton>
        )
    }

    let ratingAlerts = [fiveStarRatingAlert, fourStarRatingAlert, threeStarRatingAlert, twoStarRatingAlert, oneStarRatingAlert]

    async function rateListingCallback(listingId, value) {
        const response = await rateListing({
            variables: {
                id: listingId,
                value: value
            }
        })
    }

    let ratingStars = [];
    for (let i = 0; i < listing.rating; i++) {
        ratingStars.push(<StarsIcon />)
    }


    const _handleKeyDown = async (e) => {
        if (e.key === 'Enter') {
            const response = await reviewListing({
                variables: {
                    listingId: listingId,
                    review: reviewBeingTyped
                }
            })
            setReviews([...listing.reviews, response.data.addReview])
            setReviewBeingTyped("")
        }
    }


    return (<div>
        <Navbar />
        <Container>
            <div id="single_listing_screen">
                <div id="listing_display_image" style={{ backgroundImage: `url(${listing.image ? URI + listing.image : placeholder})`, backgroundSize: "cover", backgroundPosition: "center" }}></div>

                <div id="details_and_description">
                    <div id="listing_title">
                        {listing.title}
                        <div>{ratingStars}</div>
                    </div>
                    <Row>
                        <Col lg={6} md={12} id="listing_details">
                            <Row>
                                <Col lg={3} md={6}>
                                    <p id="listing_rent">${listing.rent}</p>
                                    <p id="bedrooms">{listing.bedrooms} Bedrooms</p>
                                    <p>{listing.bathrooms} Bathrooms</p>
                                    <p>{listing.size} sqft</p>
                                </Col>
                                <Col lg={3} md={6}>
                                    <p>{listing.address}</p>
                                    <p>{listing.city}</p>
                                    <p>{listing.parish}</p>
                                </Col>
                            </Row>
                        </Col>

                        <Col lg={6} md={12} id="listing_description">
                            {listing.description}
                        </Col>

                        <div id="divider"></div>
                    </Row>
                </div>

                <div id="owner_and_rating">
                    <Row>
                        <Col lg={6} md={12} id="owner">
                            <div id="owner_heading">Contact Owner</div>
                            <div id="owner_image_and_name">
                                <img id="owner_image" src={`${listing.owner.image ? URI + listing.owner.image : placeholder}`} />
                                <div id="name_and_contact">
                                    <p id="owner_name">{listing.owner.firstName} {listing.owner.lastName}</p>

                                    {listing.owner._id != currentUser._id ? <AlertDialog
                                        Component={contactOwnerAlert}
                                        title="Contact Owner" question={"Are you sure you want to contact the owner of this listing?"}
                                        functionToRunOnConfirm={async () => {
                                            console.log("chat started with owner")

                                            try {
                                                await startChat({
                                                    variables: {
                                                        userTwoId: listing.owner._id
                                                    }
                                                })
                                            } catch (e) {
                                                console.log(e)
                                            }
                                            history.push({ pathname: "/chats" })
                                        }}
                                        preventPageReload={true}
                                    /> : null}

                                </div>
                            </div>
                        </Col>
                        <Col lg={6} md={12} id="rating">
                            <div id="rating_heading">Rate Listing</div>
                            <div id="stars">
                                {
                                    ratingAlerts.map((ratingAlert, index) => {
                                        return <AlertDialog
                                            listingId={listing._id}
                                            functionToRunOnConfirm={() => {
                                                return rateListingCallback(listing._id, 5 - index)
                                            }}
                                            Component={ratingAlert}
                                            title="Rate Listing"
                                            question={`Are you sure you want to rate this listing?`}
                                        />
                                    })
                                }
                            </div>
                        </Col>
                        <div id="divider"></div>
                    </Row>
                </div>

                <div id="comment_section">
                    <div id="user_image_and_input">
                        <img id="user_picture"
                            src={`${currentUser.image ? URI + currentUser.image : placeholder}`} />
                        <input
                            id="comment_input"
                            type="text"
                            placeholder="Add a public comment"
                            value={reviewBeingTyped}
                            onKeyDown={_handleKeyDown}
                            onChange={
                                (e) => {
                                    setReviewBeingTyped(e.target.value)
                                }
                            } />
                    </div>
                    <div id="all_comments">
                        {reviews ? reviews.map(review => {
                            return (
                                <SingleComment
                                    user={review.user}
                                    review={review.review}
                                />
                            )
                        }) : listing.reviews.map(review => {
                            return (
                                <SingleComment
                                    user={review.user}
                                    review={review.review}
                                />
                            )
                        })}
                    </div>
                </div>


            </div>
        </Container>

    </div>)
}

export const generateStars = (numOfStars) => {
    let stars = [];
    for (let i = 0; i < numOfStars; i++) {
        stars.push(<StarBorderIcon />)
    }
    return stars;
}