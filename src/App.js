import React, { useState } from "react";

import "./App.scss";
import SubmitRating from "./pages/WrapperComponent/SubmitRating";
import ThankYou from "./pages/WrapperComponent/ThankYou";

function App(props) {
  const [readyToChange, setReadyToChange] = useState(false);
  const [rating, setRating] = useState(0);

  const handleChange = () => {
    // console.log(rating);
    setReadyToChange(true);
  };
  return (
    <div className="ratingComponents">
      {readyToChange ? (
        <ThankYou rating={rating} />
      ) : (
        <SubmitRating
          rating={rating}
          setRating={setRating}
          onButtonClick={handleChange}
        />
      )}
    </div>
  );
}

export default App;
