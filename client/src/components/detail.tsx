import React from "react";
import "./detail.css";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import Stars from "./stars";
import Student from "./student";

const Detail = () => {
  let rates = [5, 3, 2, 4, 3];

  return (
    <div id="detail-bg">
      <Card id="detail-card-left">
        <Card id="detail-card-left-top">
          <Card.Body>
            <Card.Title id="main-title">Job Title</Card.Title>
            <Card.Text>
              This is the description for the fullstack web development intern
              postion. It is used to provide information about the role overall
              and add any relevant information that does not fit in the rest of
              the fields.
            </Card.Text>
            <div className="left-top-property">
              <Card.Title className="property-title">Job Type</Card.Title>
              <Card.Text className="property-text">Full time</Card.Text>
            </div>
            <div className="left-top-property">
              <Card.Title className="property-title">Weekly Hours</Card.Title>
              <Card.Text className="property-text">15-18</Card.Text>
            </div>
            <div className="left-top-property">
              <Card.Title className="property-title">Hourly Pay</Card.Title>
              <Card.Text className="property-text">$18</Card.Text>
            </div>
            <Link to="/main">
              <Button type="submit" id="applybtn">
                Apply
              </Button>
            </Link>
          </Card.Body>
        </Card>
        <Card id="detail-card-left-bottom">
          <Card.Body>
            <div className="detail-address">
              <Card.Title className="property-title">Location:</Card.Title>
              <Card.Text className="property-text">
                1234 Illini Lane, Urbana IL 61801
              </Card.Text>
            </div>
            <Card.Body className="detail-busroute">
              <Card.Title>Nearby Bus Route</Card.Title>
              <Card.Text>blah blah</Card.Text>
            </Card.Body>
          </Card.Body>
        </Card>
      </Card>
      <Card id="detail-card-right">
        <Card.Body>
          <Card.Title id="review-title">Student Review</Card.Title>
          <div className="review-star">
            <Card.Text className="star-title">Overall</Card.Text>
            <Stars starsize={33} starval={3} />
          </div>
          <div className="review-star">
            <Card.Text className="star-title">Work Life Balance</Card.Text>
            <Stars starsize={33} starval={3} />
          </div>
          <div className="review-star">
            <Card.Text className="star-title">Culture</Card.Text>
            <Stars starsize={33} starval={3} />
          </div>
          <div className="review-star">
            <Card.Text className="star-title">Transportation</Card.Text>
            <Stars starsize={33} starval={3} />
          </div>
          <div className="review-star">
            <Card.Text className="star-title">Flexibility</Card.Text>
            <Stars starsize={33} starval={3} />
          </div>
          <Link to="/review">
            <Button type="submit" id="rvwbtn">
              Review This Job
            </Button>
          </Link>
          <Card id="student-review">
            <Student
              id={"123456789"}
              date={new Date()}
              name={"name"}
              headline={"headline"}
              review={"review"}
              rate={rates}
            />
            <Student
              id={"123456789"}
              date={new Date()}
              name={"name"}
              headline={"headline"}
              review={"review"}
              rate={rates}
            />
            <Student
              id={"123456789"}
              date={new Date()}
              name={"name"}
              headline={"headline"}
              review={"review"}
              rate={rates}
            />
          </Card>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Detail;
