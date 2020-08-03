import React from "react";
import GradeOutlinedIcon from "@material-ui/icons/GradeOutlined";
import { connect } from "react-redux";




function MinimumRating({setRatingFilterInRedux}) {
  return (
    <div>
      <h3 id="sidebar_subtitle">Minimum Rating</h3>
      <div id="sidebar_ratings">
        <div id="five_stars" class="star_icons" onClick={
          ()=>{
            setRatingFilterInRedux(5);
          }
        }>{generateStars(5)}</div>

        <div id="four_stars" class="star_icons" onClick={
          ()=>{
            setRatingFilterInRedux(4);
          }
        }>{generateStars(4)}</div>

        <div id="three_stars" class="star_icons" onClick={
          ()=>{
            setRatingFilterInRedux(3);
          }
        }>{generateStars(3)}</div>

        <div id="two_stars" class="star_icons" onClick={
          ()=>{
            setRatingFilterInRedux(2);
          }
        }>{generateStars(2)}</div>

        <div id="one_star" class="star_icons" onClick={
          ()=>{
            setRatingFilterInRedux(1);
          }
        }>{generateStars(1)}</div>
        
      </div>
    </div>
  );
}

const generateStars = (numOfStars) => {
  let icons = [];
  for (let i = 0; i < numOfStars; i++) {
    icons.push(<GradeOutlinedIcon />);
  }
  return icons;
};




const mapDispatchToProps = (dispatch) => {
  return {
    setRatingFilterInRedux: (rating) => {
      dispatch({ type: "SET_RATING_FILTER", payload: { rating } })
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(MinimumRating);

