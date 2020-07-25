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

export default function Listing({ favorited, owned_by_current_user }) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <div id="listing_card">
        <div
          id="listing_card_image"
          style={{ backgroundImage: `url(${house})` }}
        >
          {/* Displays favorite icon or edit/delete icons depending on if the user owns the listing */ }
          { owned_by_current_user 
          ? 
          <div id="delete_and_remove_icons">
            
              <IconButton  id="remove_icon">
                <RemoveCircleOutlineIcon id="white_icon" />
              </IconButton>

              <IconButton id="edit_icon" onClick={()=>{
                history.push("/edit-listing")
              }}>
                <EditIcon id="white_icon" />
              </IconButton>
          </div>
          
          : 
          <div id="favorite_listing" class="icon_outline">
            <IconButton id="icon_button">
              {favorited ? <FavoriteIcon id="white_icon" /> : <FavoriteBorderIcon id="white_icon" />}
            </IconButton>
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
          <div id="listing_price">$120,000</div>
          <div id="listing_title">Mini Mansion</div>
          <div id="listing_address">
            <LocationOnOutlinedIcon />
            <span>12 Heaven Street</span>
          </div>
          <div id="listing_size">
            <SquareFootIcon />
            <span>3500 sqft</span>
          </div>
          <div id="bedrooms">
            <KingBedOutlinedIcon />
            <span>2 bd</span>
          </div>
          <div id="bathrooms">
            <BathtubOutlinedIcon />
            <span>2 br</span>
            <div id="listing_card_rating">
              <GradeOutlinedIcon />
              <span>4</span>
            </div>
          </div>
        </div>
      </div>
    </Grid>
  );
}
