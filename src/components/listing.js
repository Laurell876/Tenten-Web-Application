import React from "react";
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


export default function Listing({ favorited, owned_by_current_user, title, size, bedrooms, bathrooms, address, rating, rent }) {


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



  return (
    <Grid item xs={12} sm={6} md={4}>
      <div id="listing_card">
        <div
          id="listing_card_image"
          style={{ backgroundImage: `url(${house})` }}
        >
          {/* Displays favorite icon or edit/delete icons depending on if the user owns the listing */}
          {owned_by_current_user
            ?
            <div id="delete_and_remove_icons">
              <AlertDialog Component={removeIconAlert} title="Remove Listing" question={"Are you sure you want to remove this listing"} />

              <IconButton id="edit_icon" onClick={() => {
                history.push("/edit-listing")
              }}>
                <EditIcon id="white_icon" />
              </IconButton>
            </div>

            :
            <div id="favorite_listing" class="icon_outline">
              <AlertDialog Component={favoriteIconAlert} title={favorited ? "Remove Listing From Favorites" : "Add Listing To Favorites"} question={favorited ? "Are you sure you want to remove this listing from favorites" : "Are you sure you want to add this listing to favorites"} />

            </div>
          }

        </div>

        <div id="navigation" onClick={() => {
          history.push("/single-listing-screen")
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


