import React from "react";
import "./review.css";
import Rating from "./rating";
import { Link } from "react-router-dom";
import { Card, Form, Button, Col, Row } from "react-bootstrap";

const Review = () => {
  document.body.style.overflow = "hidden";

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
                <Rating starsize={40} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={5}>
                Work Life Balance
              </Form.Label>
              <Col className="rate" sm={7}>
                <Rating starsize={40} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={5}>
                Culture
              </Form.Label>
              <Col className="rate" sm={7}>
                <Rating starsize={40} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={5}>
                Transportation
              </Form.Label>
              <Col className="rate" sm={7}>
                <Rating starsize={40} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={5}>
                Flexibility
              </Form.Label>
              <Col className="rate" sm={7}>
                <Rating starsize={40} />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={5}>
                Add a headline
              </Form.Label>
              <Col className="rate" sm={7}>
                <Form.Control as="textarea" size="sm" id="headline"/>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={5}>
                Add a review
              </Form.Label>
              <Col className="rate" sm={7}>
                <Form.Control as="textarea" size="sm" id="review"/>
              </Col>
            </Form.Group>
            <Link to="/main">
              <Button type="submit" id="submitbtn">
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
