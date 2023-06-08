import React, { useState } from "react";
import "./style.scss";

function RatingNumbers(props) {
  const [selected, setSelected] = useState(0);

  const handleRating = (rating) => {
    props.setRating(rating);
    setSelected(rating);
  };

  return (
    <div className="ratingElements">
      {[1, 2, 3, 4, 5].map((rating) => {
        const isSelected = rating === selected;
        const CName = isSelected ? "selected" : "";
        return (
          <span
            key={rating}
            onClick={() => handleRating(rating)}
            className={CName}
          >
            {rating}
          </span>
        );
      })}
    </div>
  );
}

export default RatingNumbers;
