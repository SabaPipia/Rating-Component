import "./RatingNumbers.css";
import React from "react";

function RatingNumbers(props) {
  const handleRating = (rating) => {
    props.setRating(rating);
  };

  return (
    <div className="rating">
      <span onClick={() => handleRating(1)}>1</span>
      <span onClick={() => handleRating(2)}>2</span>
      <span onClick={() => handleRating(3)}>3</span>
      <span onClick={() => handleRating(4)}>4</span>
      <span onClick={() => handleRating(5)}>5</span>
    </div>
  );
}

export default RatingNumbers;
