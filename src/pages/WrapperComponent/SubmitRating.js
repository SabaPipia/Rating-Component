import Star from "../../components/Icons/Star";

import RatingText from "../Rating/RatingText";
import RatingNumbers from "../Rating/RatingNumbers";
import Button from "../../components/Button";
import React from "react";

function SubmitRatingPage(props) {
  return (
    <div>
      <Star />
      <RatingText />
      <RatingNumbers setRating={props.setRating} />
      <Button rating={props.rating} onButtonClick={props.onButtonClick} />
    </div>
  );
}

export default SubmitRatingPage;
