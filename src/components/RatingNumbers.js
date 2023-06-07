import "./RatingNumbers.css";
import React from "react";

function RatingNumbers(props) {
  const handleRating = (rating) => {
    props.setRating(rating);
  };

  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((rating) => {
        return <span onClick={() => handleRating(rating)}>{rating}</span>;
      })}
    </div>
  );
}

export default RatingNumbers;
