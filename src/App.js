import React, { useState } from "react";

import "./App.css";
import SubmitRatingPage from "./components/SubmitRatingPage";
import Main from "./components/ThankYouPage/Main";

function App(props) {
  const [readyToChange, setReadyToChange] = useState(false);
  const [rating, setRating] = useState(0);

  const handleChange = () => {
    console.log(rating);
    setReadyToChange(true);
  };
  return (
    <div className="rating-component">
      {readyToChange ? (
        <Main rating={rating} />
      ) : (
        <SubmitRatingPage
          rating={rating}
          setRating={setRating}
          onButtonClick={handleChange}
        />
      )}
    </div>
  );
}

export default App;
