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

const Detail = () => {
  let rates = [5, 3, 2, 4, 3];

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

  let navigate = useNavigate();
  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");

    if (authToken) {
      navigate("/detail");
      fetchData();      
      calculateRate();  
    }

    if (!authToken) {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate]); 

  const fetchData = async () => {
    axios.get("api/jobs/" + jobId).then((res) => {
      setJob(res.data.data);
    });
  };

  const calculateRate = () => {
    let temp: number[] = job.ratingTotals.map((e) =>
      Math.round(e / job.numberReviews)
    );
    setAvgRate(temp);
  };

  return (
    <div id="detail-bg">
      <Card id="detail-card-left">
        <Card id="detail-card-left-top">
          <Card.Body>
            <Card.Title id="main-title">{job.title}</Card.Title>
            <Card.Text>{job.description}</Card.Text>
            <div className="left-top-property">
              <Card.Title className="property-title">Job Type</Card.Title>
              <Card.Text className="property-text">
                {job?.employmentType}
              </Card.Text>
            </div>
            <div className="left-top-property">
              <Card.Title className="property-title">Weekly Hours</Card.Title>
              <Card.Text className="property-text">
                {job?.weeklyHours}
              </Card.Text>
            </div>
            <div className="left-top-property">
              <Card.Title className="property-title">Hourly Pay</Card.Title>
              <Card.Text className="property-text">{job.hourlyPay}</Card.Text>
            </div>
            <Link to={job.externalLink}>
              <Button type="submit" id="applybtn">
                Apply
              </Button>
            </Link>
          </Card.Body>
        </Card>
        <Card id="detail-card-left-bottom">
          <Card.Body id="left-bottom-body">
            <div className="detail-address">
              <Card.Title className="property-title">Location</Card.Title>
              <Card.Text className="property-text">{job.location}</Card.Text>
            </div>
            <Card.Body id="detail-busroute">
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
          <Link to={"/review/"+jobId}>
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
              review={
                "review aldkjfa;sdlkfja;ejfaslkdjfa;lsdfkja;ld kfja;sldk fjasldkjfa; sldkjfd"
              }
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
