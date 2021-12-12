import React from "react";
import "./stars.css";
import { FaStar } from "react-icons/fa";

type Props = {
  starsize: number;
  starval: number;
};

const Stars = ({ starsize, starval }: Props) => {
  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const rate = i + 1;
        return (
          <label key={i}>
            <FaStar
              className="star"
              color={rate <= starval ? "#e25632" : "#e4e5e9"}
              size={starsize}
            />
          </label>
        );
      })}
    </div>
  );
};

export default Stars;
