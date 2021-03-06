import React, { useEffect, useState } from "react";
import "./detail.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import Stars from "./stars";
import Student from "./student";
import axios from "axios";

export interface Datum {
  _id: string;
  title: string;
  description: string;
  externalLink: string;
  location: string;
  hourlyPay: number;
  employmentType: EmploymentType;
  weeklyHours: number;
  ratingTotals: number[];
  numberReviews: number;
  datePosted: Date;
  __v: number;
}

export enum EmploymentType {
  FullTime = "Full time",
  PartTime = "Part time",
  default = "N/A",
}

export interface detailParmas {
  jobId: string;
  job: Datum;
}

export interface Review {
  _id: string;
  overall: number;
  workLifeBalance: number;
  culture: number;
  transportation: number;
  flexibility: number;
  headline: string;
  reviewText: string;
  jobReviewed: string;
  reviewerName: string;
  dateCreated: Date;
}

const Detail = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState<Datum>({
    _id: "N/A",
    title: "N/A",
    description: "N/A",
    externalLink: "N/A",
    location: "N/A",
    hourlyPay: 0,
    employmentType: EmploymentType.default,
    weeklyHours: 0,
    ratingTotals: [0, 0, 0, 0, 0],
    numberReviews: 0,
    datePosted: new Date(),
    __v: 0,
  });
  const [avgRate, setAvgRate] = useState<number[]>([0, 0, 0, 0, 0]);
  const [reviews, setReviews] = useState<Review[]>([]);

  let navigate = useNavigate();
  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");
    if (!authToken) {
      navigate("/login");
    }

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate]);

  const fetchData = async () => {
    axios
      .get(window.location.origin + "/api/jobs/" + jobId)
      .then((res) => {
        setJob(res.data.data);
        let ratings: number[] = res.data.data.ratingTotals.map((e: number) =>
          Math.round(e / res.data.data.numberReviews)
        );
        setAvgRate(ratings);
        axios
          .get(window.location.origin + "/api/reviews", {
            params: {
              where: { jobReviewed: jobId },
            },
          })
          .then((res) => {
            setReviews(res.data.data);
          })
          .catch(function (error) {
            console.log(error);
          });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div id="detail-bg">
      {job ? (
        <>
          <Card id="detail-card-left">
            <Card id="detail-card-left-top">
              <Card.Body>
                <Card.Title id="main-title">{job.title}</Card.Title>
                <Card.Text id="detail-des">{job.description}</Card.Text>
              </Card.Body>
            </Card>
            <Card id="detail-card-left-bottom">
              <Card.Body id="left-bottom-body">
                <div className="left-top-property">
                  <Card.Title className="property-title">Job Type</Card.Title>
                  <Card.Text className="property-text">
                    {job.employmentType}
                  </Card.Text>
                </div>
                <div className="left-top-property">
                  <Card.Title className="property-title">
                    Weekly Hours
                  </Card.Title>
                  <Card.Text className="property-text">
                    {job.weeklyHours}
                  </Card.Text>
                </div>
                <div className="left-top-property">
                  <Card.Title className="property-title">Hourly Pay</Card.Title>
                  <Card.Text className="property-text">
                    {job.hourlyPay}
                  </Card.Text>
                </div>
                <div className="detail-address">
                  <Card.Title className="property-title">Location</Card.Title>
                  <Card.Text className="property-text">
                    {job.location}
                  </Card.Text>
                </div>
                <a href={job.externalLink} target="_blank" rel="noreferrer">
                  <Button type="submit" id="applybtn">
                    Apply
                  </Button>
                </a>
              </Card.Body>
            </Card>
          </Card>
          <Card id="detail-card-right">
            <Card.Body>
              <Card.Title id="review-title">Student Review</Card.Title>
              <div className="review-star">
                <Card.Text className="star-title">Overall</Card.Text>
                <Stars starsize={33} starval={avgRate[0]} />
              </div>
              <div className="review-star">
                <Card.Text className="star-title">Work Life Balance</Card.Text>
                <Stars starsize={33} starval={avgRate[1]} />
              </div>
              <div className="review-star">
                <Card.Text className="star-title">Culture</Card.Text>
                <Stars starsize={33} starval={avgRate[2]} />
              </div>
              <div className="review-star">
                <Card.Text className="star-title">Transportation</Card.Text>
                <Stars starsize={33} starval={avgRate[3]} />
              </div>
              <div className="review-star">
                <Card.Text className="star-title">Flexibility</Card.Text>
                <Stars starsize={33} starval={avgRate[4]} />
              </div>
              <Link to={`/review/${jobId}`}>
                <Button type="submit" id="rvwbtn">
                  Review This Job
                </Button>
              </Link>
              <Card id="student-review">
                {reviews.map((review: Review) => (
                  <Student
                    id={review._id}
                    date={new Date(review.dateCreated)}
                    name={review.reviewerName}
                    headline={review.headline}
                    review={review.reviewText}
                    rate={[
                      review.overall,
                      review.workLifeBalance,
                      review.culture,
                      review.transportation,
                      review.flexibility,
                    ]}
                  />
                ))}
              </Card>
            </Card.Body>
          </Card>
        </>
      ) : (
        <p>Nothing</p>
      )}
    </div>
  );
};

export default Detail;
