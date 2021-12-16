import React, { useEffect, useState } from "react";
import "./review.css";
import Rating from "./rating";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Card, Form, Button, Col, Row } from "react-bootstrap";
import axios from "axios";
import successImg from "../assests/success.png";
import failImg from "../assests/fail.png";

type reviewForm = {
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
};

type errorForm = {
  [key: string]: string;
  headline: string;
  reviewText: string;
};

export interface detailParmas {
  jobId: string;
}

const Review = () => {
  document.body.style.overflow = "hidden";

  const { jobId } = useParams();

  const [sumbitStatus, setSubmitStatus] = useState("not submitted");
  const [userName, setUserName] = useState("");

  const email = sessionStorage.getItem("email");
  axios.get("/api/users/" + email).then((res) => {
    let name = res.data.data[0].name;
    setUserName(name);
  });

  const [review, setReview] = useState<reviewForm>({
    overall: 0,
    workLifeBalance: 0,
    culture: 0,
    transportation: 0,
    flexibility: 0,
    headline: "",
    reviewText: "",
    jobReviewed: "",
    reviewerName: "",
    dateCreated: new Date(),
  });

  const [errors, setErrors] = useState<errorForm>({
    headline: "",
    reviewText: "",
  });

  const setField = (field: string, value: any) => {
    setReview({
      ...review,
      [field]: value,
    });
    if (!!errors[field])
      setErrors({
        ...errors,
        [field]: "",
      });
  };

  const findFormErrors = () => {
    const {
      overall,
      workLifeBalance,
      culture,
      transportation,
      flexibility,
      headline,
      reviewText,
      jobReviewed,
      reviewerName,
      dateCreated,
    } = review;

    const newErrors: errorForm = {
      headline: "",
      reviewText: "",
    };

    if (!headline || headline === "") newErrors.headline = "cannot be blank!";
    if (!reviewText || reviewText === "")
      newErrors.reviewText = "cannot be blank!";

    return newErrors;
  };

  let navigate = useNavigate();

  useEffect(() => {
    let authToken = sessionStorage.getItem("Auth Token");

    if (!authToken) {
      navigate("/login");
    }

    setField("reviewerName", userName);
    // setField("jobReviewed", jobId);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate, userName]);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const newErrors = findFormErrors();
    if (!Object.values(newErrors).every((o) => o === "")) {
      setErrors(newErrors);
      console.log(errors);
    } else {
      console.log(review);
      // axios
      //   .post("api/reviews", review)
      //   .then(function (response) {
      //     console.log(response);
      //     setSubmitStatus("Created");
      //     let jobId = response.data.data._id;
      //     console.log(jobId);
      //     setTimeout(() => {
      //       navigate("/main");
      //     }, 3000);
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //     setSubmitStatus("Error");
      //     setTimeout(() => {
      //       setSubmitStatus("Not Submitted");
      //     }, 3000);
      //   });
    }
  };

  if (sumbitStatus === "Created") {
    return (
      <div id="review-bg">
        <Card className="review-card">
          <Card.Title id="review-card-title">Create Review</Card.Title>
          <Card.Body id="review-content">
            <img src={successImg} height="300px" width="300px" alt="Success" />
            <h4 className="success">Job Successfully Posted!</h4>
            <p>Redirecting to job posting...</p>
          </Card.Body>
        </Card>
      </div>
    );
  } else if (sumbitStatus === "Error") {
    return (
      <div id="review-bg">
        <Card className="review-card">
          <Card.Title id="review-card-title">Create Review</Card.Title>
          <Card.Body id="review-content">
            <img src={failImg} height="300px" width="300px" alt="Failure" />
            <h4 className="fail">Review Creation Failed. Please try again!</h4>
          </Card.Body>
        </Card>
      </div>
    );
  }

  return (
    <div id="review-bg">
      <Card className="review-card">
        <Card.Title id="review-card-title">Create Review</Card.Title>
        <Card.Body id="review-content">
          <Form className="review-form">
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={5}>
                Overall Rating
              </Form.Label>
              <Col className="rate" sm={7}>
                <Rating starsize={40} onRate={setField} rateName={"overall"} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={5}>
                Work Life Balance
              </Form.Label>
              <Col className="rate" sm={7}>
                <Rating
                  starsize={40}
                  onRate={setField}
                  rateName={"workLifeBalance"}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={5}>
                Culture
              </Form.Label>
              <Col className="rate" sm={7}>
                <Rating starsize={40} onRate={setField} rateName={"culture"} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={5}>
                Transportation
              </Form.Label>
              <Col className="rate" sm={7}>
                <Rating
                  starsize={40}
                  onRate={setField}
                  rateName={"transportation"}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={5}>
                Flexibility
              </Form.Label>
              <Col className="rate" sm={7}>
                <Rating
                  starsize={40}
                  onRate={setField}
                  rateName={"flexibility"}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={5}>
                Add a headline
              </Form.Label>
              <Col className="rate" sm={7}>
                <Form.Control
                  as="textarea"
                  size="sm"
                  id="headline"
                  onChange={(e) => {
                    setField("headline", e.target.value);
                  }}
                  isInvalid={!!errors.headline}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.headline}
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={5}>
                Add a review
              </Form.Label>
              <Col className="rate" sm={7}>
                <Form.Control
                  as="textarea"
                  size="sm"
                  id="review"
                  onChange={(e) => {
                    setField("reviewText", e.target.value);
                  }}
                  isInvalid={!!errors.reviewText}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.reviewText}
                </Form.Control.Feedback>
              </Col>
            </Form.Group>
            <Link to="/main">
              <Button type="submit" id="submitbtn" onClick={handleSubmit}>
                Submit
              </Button>
            </Link>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Review;
