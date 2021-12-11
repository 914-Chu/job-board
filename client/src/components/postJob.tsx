import React from "react";
import "./postJob.css";
import { Card, Form, Button, Col, Row } from 'react-bootstrap';

const PostJob = () => {
  return (
    <div id="postJob-bg">
        <Card className="postJob-card-container">
            <Card.Title className="postJob-title">
                Create New Job
            </Card.Title>
            <Card.Body>
                <Form id="postJob-form">
                    <Form.Group as={Row} className="mb-3" controlId="job-title">
                        <Form.Label column sm="3">
                            Job Title*
                        </Form.Label>
                        <Col sm="9">
                            <Form.Control type="text" size="sm" placeholder="Title" required />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="job-desc">
                        <Form.Label column sm="3">
                            Description*
                        </Form.Label>
                        <Col sm="9">
                            <Form.Control as="textarea" size="sm" placeholder="Description"
                                style={{ height: '110px' }}
                                required
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="job-location" >
                        <Form.Label column sm="3">
                            Location*
                        </Form.Label>
                        <Col sm="9">
                            <Form.Control type="text" size="sm" placeholder="Location" required />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="job-pay">
                        <Form.Label column sm="3">
                            Hourly Pay*
                        </Form.Label>
                        <Col sm="9">
                            <Form.Control type="number" min="0.01" step="0.01"  size="sm" placeholder="Hourly Pay" required/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="job-type">
                        <Form.Label column sm="3">
                            Employment Type*
                        </Form.Label>
                        <Col sm="9">
                            <Form.Select size="sm" aria-label="floatingSelect" required>
                                <option>Not Selected</option>
                                <option value="full-time">Full Time</option>
                                <option value="part-time">Part Time</option>
                                <option value="internship">Internship</option>
                            </Form.Select>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="job-weekly-hours">
                        <Form.Label column sm="3">
                            Weekly Hours*
                        </Form.Label>
                        <Col sm="9">
                            <Form.Control type="number" size="sm" placeholder="Weekly Hours" required />
                        </Col>
                    </Form.Group>
                    <Button id="postJob-submit">
                        Post
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    </div>
  );
}

export default PostJob;