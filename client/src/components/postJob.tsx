import React, { useState } from "react";
import "./postJob.css";
import { Card, Form, Button, Col, Row, InputGroup } from 'react-bootstrap';

type formTypes = {
    title: string,
    description: string,
    location: string,
    hourlyPay: number,
    employmentType: string,
    weeklyHours: number
}

type errorTypes = {
    [key: string]: string,
    title: string,
    description: string,
    location: string,
    hourlyPay: string,
    employmentType: string,
    weeklyHours: string
}

const PostJob = () => {

    const [ form, setForm ] = useState<formTypes>({
        title: '',
        description: '',
        location: '',
        hourlyPay: NaN,
        employmentType: '',
        weeklyHours: NaN
    });
    const [ errors, setErrors ] = useState<errorTypes>({
        title: '',
        description: '',
        location: '',
        hourlyPay: '',
        employmentType: '',
        weeklyHours: ''
    });

    const setField = (field: string, value: any) => {
        setForm({
            ...form,
            [field]: value
        })

        if ( !!errors[field] ) setErrors({
            ...errors,
            [field]: ''
        })
    }

    const findFormErrors = () => {
        const { title, description, location, 
            hourlyPay, employmentType, weeklyHours }
            = form;
        const newErrors : errorTypes = {
            title: '',
            description: '',
            location: '',
            hourlyPay: '',
            employmentType: '',
            weeklyHours: ''
        };

        if ( !title || title === '' ) newErrors.title = 'cannot be blank!';
        if ( !description || description === '' ) newErrors.description = 'cannot be blank!';
        if ( !location || location === '' ) newErrors.location = 'cannot be blank!';
        if ( !hourlyPay || hourlyPay < 0.01 ) newErrors.hourlyPay = 'must assign an hourly pay of at least $0.01!';
        if ( !employmentType || employmentType === 'Not Selected' ) newErrors.employmentType = 'select an employment type!';
        if ( !weeklyHours || weeklyHours < 1 ) newErrors.weeklyHours = 'must assign weekly hours of at least 1!';

        return newErrors;
    }

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const newErrors = findFormErrors();
        if (!Object.values(newErrors).every(o => o === '')) {
            setErrors(newErrors);
            console.log(errors);
        } else {
            alert('Job Posted!');
        }
    }

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
                                    onChange={(e) => {setField('title', e.target.value)}}
                                    isInvalid={ !!errors.title } />
                                <Form.Control.Feedback type='invalid'>
                                    { errors.title }
                                </Form.Control.Feedback>
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
                                    onChange={(e) => {setField('description', e.target.value)}}
                                    isInvalid={ !!errors.description } />
                                <Form.Control.Feedback type='invalid'>
                                    { errors.description }
                                </Form.Control.Feedback>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="job-location" >
                            <Form.Label column sm="3">
                                Location*
                            </Form.Label>
                            <Col sm="9">
                                <Form.Control type="text" size="sm" placeholder="Location" required
                                    onChange={(e) => {setField('location', e.target.value)}}
                                    isInvalid={ !!errors.location } />
                                <Form.Control.Feedback type='invalid'>
                                    { errors.location }
                                </Form.Control.Feedback>
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
                                        onChange={(e) => {setField('hourlyPay', Number(e.target.value))}}
                                        isInvalid={ !!errors.hourlyPay } />
                                    <Form.Control.Feedback type='invalid'>
                                        { errors.hourlyPay }
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="job-type">
                            <Form.Label column sm="3">
                                Employment Type*
                            </Form.Label>
                            <Col sm="9">
                                <Form.Select size="sm" aria-label="floatingSelect" required
                                    onChange={(e) => {setField('employmentType', e.target.value)}}
                                    isInvalid={ !!errors.employmentType } >
                                    <option>Not Selected</option>
                                    <option value="full-time">Full Time</option>
                                    <option value="part-time">Part Time</option>
                                </Form.Select>
                                <Form.Control.Feedback type='invalid'>
                                    { errors.employmentType }
                                </Form.Control.Feedback>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="job-weekly-hours">
                            <Form.Label column sm="3">
                                Weekly Hours*
                            </Form.Label>
                            <Col sm="9">
                                <Form.Control type="number" size="sm" placeholder="Weekly Hours" required
                                    min="1"
                                    onChange={(e) => {setField('weeklyHours', Number(e.target.value))}}
                                    isInvalid={ !!errors.weeklyHours } />
                                <Form.Control.Feedback type='invalid'>
                                    { errors.weeklyHours }
                                </Form.Control.Feedback>
                            </Col>
                        </Form.Group>
                        <Button id="postJob-submit" type="submit" onClick={handleSubmit}>
                            Post
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
}

export default PostJob;