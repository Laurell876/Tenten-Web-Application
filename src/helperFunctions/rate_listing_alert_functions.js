
import React from "react";
import {generateStars} from "../screens/single_listing_screen";

export function fiveStarRatingAlert({functionToRunOnClick}){
    return (
        <div id="star_icons" onClick={functionToRunOnClick}>{generateStars(5)}</div>
    )
}

export function fourStarRatingAlert({functionToRunOnClick}){
    return (
        <div id="star_icons" onClick={functionToRunOnClick}>{generateStars(4)}</div>
    )
}


export function threeStarRatingAlert({functionToRunOnClick}){
    return (
        <div id="star_icons" onClick={functionToRunOnClick}>{generateStars(3)}</div>
    )
}


export function twoStarRatingAlert({functionToRunOnClick}){
    return (
        <div id="star_icons" onClick={functionToRunOnClick}>{generateStars(2)}</div>
    )
}

export function oneStarRatingAlert({functionToRunOnClick}){
    return (
        <div id="star_icons" onClick={functionToRunOnClick}>{generateStars(1)}</div>
    )
}

