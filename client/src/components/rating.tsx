import React, { useState, useEffect } from 'react';
import "./rating.css";
import {FaStar} from "react-icons/fa";

type Props = {
    starsize: number;
};

const Rating = ({starsize}: Props) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    useEffect(() => {
        console.log(hover);
    },[rating, hover]);

    const handleClick = (e: React.MouseEvent) => {
        const target = e.target as HTMLElement
        let r = Number(target.getAttribute("value"));
        if(r === 1 && rating === 1){
            setRating(0);
        }else{
            setRating(r);
        }
    }

    return (
        <div>
            {[...Array(5)].map((star, i) => {
                const rate = i + 1;
                return (
                    <label key={i}>
                        <input 
                            type="radio" 
                            name="rating"
                            value={rate}
                            onClick={handleClick}>
                        </input>
                        <FaStar
                            className="star"
                            onMouseOver={() => setHover(rate)}
                            onMouseLeave={() => setHover(0)}
                            color={rate <= (hover || rating) ? "#e25632" : "#e4e5e9"}
                            size={starsize}/>
                    </label>
                );
            })}
        </div>


    );
};

export default Rating;