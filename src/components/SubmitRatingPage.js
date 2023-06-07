import Star from "./star";
import RatingSeciton from "./RatingSection";
import RatingText from "./RatingText";
import React, { useState } from "react";

function SubmitRatingPage(props) {
  return (
    <div>
      <Star />
      <RatingText />
      <RatingSeciton
        rating={props.rating}
        setRating={props.setRating}
        onButtonClick={props.onButtonClick}
      />
    </div>
  );
}

export default SubmitRatingPage;
