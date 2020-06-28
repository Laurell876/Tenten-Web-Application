import React from "react";
import GradeOutlinedIcon from "@material-ui/icons/GradeOutlined";

export default function MinimumRating() {
  return (
    <div>
      <h3 id="sidebar_subtitle">Minimum Rating</h3>
      <div id="sidebar_ratings">
        <div id="five_stars" class="star_icons">{generateStars(5)}</div>
        <div id="four_stars" class="star_icons">{generateStars(4)}</div>
        <div id="three_stars" class="star_icons">{generateStars(3)}</div>
        <div id="two_stars" class="star_icons">{generateStars(2)}</div>
        <div id="one_star" class="star_icons">{generateStars(1)}</div>
      </div>
    </div>
  );
}

const generateStars = (numOfStars) => {
  let icons = [];
  for (let i = 0; i < numOfStars; i++) {
    console.log(i);
    icons.push(<GradeOutlinedIcon />);
  }
  return icons;
};
