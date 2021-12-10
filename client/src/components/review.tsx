import React, { useState } from "react";
import bg from "../assests/quad.jpg";
import "./review.css";

const Review = () => {
  let Rating = require("react-rating");
  React.createElement(Rating);
  const [rating, setRating] = useState(0);

  const handleClick = (rate: number) => {
    setRating(rate);
  };

  return (
    <div id="bg">
      <img src={bg} className="fitimg" alt="" />
      <div className="card">
        <div className="avgrate">
          <Rating
            start={0}
            stop={5}
            step={1}
            fractions={1}
            initialRaing={rating}
            direction="ltr"
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Review;
