import React, { useState } from "react";
import NavigationIcon from "@material-ui/icons/Navigation";
import IconButton from "@material-ui/core/IconButton";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import SquareFootIcon from "@material-ui/icons/SquareFoot";
import house from "../images/house.jpg";
import Grid from "@material-ui/core/Grid";
import KingBedOutlinedIcon from "@material-ui/icons/KingBedOutlined";
import BathtubOutlinedIcon from '@material-ui/icons/BathtubOutlined';
import GradeOutlinedIcon from '@material-ui/icons/GradeOutlined';
import history from "./history";
import FavoriteIcon from '@material-ui/icons/Favorite';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import EditIcon from '@material-ui/icons/Edit';
import AlertDialog from "./alert_dialog";
import { ADD_FAVORITE, REMOVE_FAVORITE } from "../graphql/mutations";
import { useQuery, useMutation } from "@apollo/react-hooks";
import {REMOVE_LISTING } from "../graphql/mutations";
import {URI} from "../constants";
import placeholder from "../images/placeholder.png"


export default function Listing({ key, favorited, owned_by_current_user, listing }) {

  const id = listing._id;
  const rent = listing.rent;
  const title = listing.title;
  const address = listing.address;
  const size = listing.size;
  const bedrooms = listing.bedrooms;
  const bathrooms = listing.bathrooms;
  const rating = listing.rating;

  const [addFavorite, addFavoriteObject] = useMutation(ADD_FAVORITE);
  const [removeFavorite, removeFavoriteObject] = useMutation(REMOVE_FAVORITE);
  const [removeListing, removeListingObject] = useMutation(REMOVE_LISTING);

  const deleteListing = async (listingId) => {
    const response = await removeListing({
      variables: {
        id: listingId
      }
    })
  }

  const favoriteListing = async (listingId) => {
    const response = await addFavorite({
      variables: {
        id: listingId
      }
    })
  }

  const unFavoriteListing = async (listingId) => {
    const response = await removeFavorite({
      variables: {
        id: listingId
      }
    })
  }
  //console.log(functionToRunOnConfirm);

  favorited = favorited()


  function favoriteIconAlert({ functionToRunOnClick }) {
    return (
      <IconButton id="icon_button" onClick={functionToRunOnClick}>
        {favorited ? <FavoriteIcon id="white_icon" /> : <FavoriteBorderIcon id="white_icon" />}
      </IconButton>
    )
  }

  function removeIconAlert({ functionToRunOnClick }) {
    return (
      <IconButton id="remove_icon" onClick={functionToRunOnClick}>
        <RemoveCircleOutlineIcon id="white_icon" />
      </IconButton>

    )
  }


  console.log(URI + listing.image)
  return (
    <Grid item xs={12} sm={6} md={4}>
      <div id="listing_card">
        <div
          id="listing_card_image"
          style={{ backgroundImage:  `url(${listing.image ?URI + listing.image : placeholder })`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          {/* Displays favorite icon or edit/delete icons depending on if the user owns the listing */}
          {owned_by_current_user
            ?
            <div id="delete_and_remove_icons">
              <AlertDialog listingId={id} functionToRunOnConfirm={deleteListing} Component={removeIconAlert} title="Remove Listing" question={"Are you sure you want to remove this listing"} />

              <IconButton id="edit_icon" onClick={() => {
                history.push({pathname: "/edit-listing", listing: listing})
              }}>
                <EditIcon id="white_icon" />
              </IconButton>
            </div>

            :
            <div id="favorite_listing" class="icon_outline">
              <AlertDialog
                listingId={id}
                functionToRunOnConfirm={
                  favorited ? unFavoriteListing : favoriteListing
                }
                Component={favoriteIconAlert}
                title={favorited ? "Remove Listing From Favorites" : "Add Listing To Favorites"}
                question={favorited ? "Are you sure you want to remove this listing from favorites" : "Are you sure you want to add this listing to favorites"} />

            </div>
          }

        </div>

        <div id="navigation" onClick={() => {
          history.push({pathname: "/single-listing-screen", state: {listingId: listing._id}})
        }}>
          <IconButton id="icon_button">
            <NavigationIcon id="navigation_icon" />
          </IconButton>
        </div>

        <div id="listing_info">
          <div id="listing_price">${rent}</div>
          <div id="listing_title">{title}</div>
          <div id="listing_address">
            <LocationOnOutlinedIcon />
            <span>{address}</span>
          </div>
          <div id="listing_size">
            <SquareFootIcon />
            <span>{size}</span>
          </div>
          <div id="bedrooms">
            <KingBedOutlinedIcon />
            <span>{bedrooms}</span>
          </div>
          <div id="bathrooms">
            <BathtubOutlinedIcon />
            <span>{bathrooms}</span>
            <div id="listing_card_rating">
              <GradeOutlinedIcon />
              <span>{rating}</span>
            </div>
          </div>
        </div>
      </div>
    </Grid>
  );
}


