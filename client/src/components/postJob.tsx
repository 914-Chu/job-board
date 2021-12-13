import React, { useState } from "react";
import "./postJob.css";
import { Card, Form, Button, Col, Row, InputGroup } from 'react-bootstrap';

const PostJob = () => {

    const [ form, setForm ] = useState({})
    const [ errors, setErrors ] = useState({})

    const [ title, setTitle ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ location, setLocation ] = useState('');
    const [ hourlyPay, setHourlyPay ] = useState(0.01);
    const [ jobType, setJobType ] = useState('');
    const [ weeklyHours, setWeeklyHours ] = useState(1);

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
                                <Form.Control type="text" size="sm" placeholder="Title" required
                                    value={title}
                                    onChange={(e) => {setTitle(e.target.value)}} />
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
                                    value={description}
                                    onChange={(e) => {setDescription(e.target.value)}} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="job-location" >
                            <Form.Label column sm="3">
                                Location*
                            </Form.Label>
                            <Col sm="9">
                                <Form.Control type="text" size="sm" placeholder="Location" required
                                    value={location}
                                    onChange={(e) => {setLocation(e.target.value)}} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="job-pay">
                            <Form.Label column sm="3">
                                Hourly Pay*
                            </Form.Label>
                            <Col sm="9">
                                <InputGroup>
                                    <InputGroup.Text>$</InputGroup.Text>
                                    <Form.Control type="number" min="0.01" step="0.01"  size="sm" placeholder="Hourly Pay" required
                                    value={hourlyPay}
                                    onChange={(e) => {setHourlyPay(Number(e.target.value))}} />
                                </InputGroup>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="job-type">
                            <Form.Label column sm="3">
                                Employment Type*
                            </Form.Label>
                            <Col sm="9">
                                <Form.Select size="sm" aria-label="floatingSelect" required
                                    onChange={(e) => {setJobType(e.target.value)}} >
                                    <option>Not Selected</option>
                                    <option value="full-time">Full Time</option>
                                    <option value="part-time">Part Time</option>
                                </Form.Select>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="job-weekly-hours">
                            <Form.Label column sm="3">
                                Weekly Hours*
                            </Form.Label>
                            <Col sm="9">
                                <Form.Control type="number" size="sm" placeholder="Weekly Hours" required
                                    min="1"
                                    value={weeklyHours}
                                    onChange={(e) => {setWeeklyHours(Number(e.target.value))}} />
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