import React, { useEffect } from "react";
import "./review.css";
import Rating from "./rating";
import { Link, useNavigate } from "react-router-dom";
import { Card, Form, Button, Col, Row } from "react-bootstrap";

const Review = () => {
  document.body.style.overflow = "hidden";

  let navigate = useNavigate();
  useEffect(() => {
      let authToken = sessionStorage.getItem('Auth Token')

      if (authToken) {
          navigate('/review')
      }

      if (!authToken) {
          navigate('/login')
      }
  }, [navigate])

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
      {/* <div className="card">
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
        </div> */}
    </div>
  );
};

export default Review;
