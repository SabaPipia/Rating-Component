import React, { useState } from "react";
import RatingNumbers from "./RatingNumbers";
import Button from "./Button";

function RatingSeciton(props) {
  return (
    <div>
      <RatingNumbers setRating={props.setRating} />
      <Button rating={props.rating} onButtonClick={props.onButtonClick} />
    </div>
  );
}

export default RatingSeciton;
