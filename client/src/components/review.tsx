import React from "react";
import "./review.css";
import Rating from './rating';
import { Link } from "react-router-dom";

const Review = () => {
  document.body.style.overflow = "hidden";
  
  return (
    <div id="review-bg">
        <div className="card">
          <div className="content">
            <div className="title">
              Create Review
            </div>
            <div className="rate">
              <div className="overall">
                <p>Overall Rating</p>
                <Rating starsize={50}/>
              </div>
              <div className="overall">
                <p>Work Life Balance</p>
                <Rating starsize={50}/>
              </div>
              <div className="overall">
                <p>Culture</p>
                <Rating starsize={50}/>
              </div>
              <div className="overall">
                <p>Transportation</p>
                <Rating starsize={50}/>
              </div>
              <div className="overall">
                <p>Flexibility</p>
                <Rating starsize={50}/>
              </div>
            </div>
            <div className="textreview">
                <p>Add a headline</p>
                <textarea rows={1} cols={41}>

                </textarea>
            </div>
            <div className="textreview">
                <p>Add a review</p>
                <textarea rows={1} cols={41}>

                </textarea>
            </div>          
            <Link to="/main">
                <button type="submit" className="submitbtn">
                  Submit
                </button>
            </Link>
          </div>
        </div>
    </div>
  );
};

export default Review;
