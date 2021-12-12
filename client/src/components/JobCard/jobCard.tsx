import React from 'react';
import './jobCard.css';
import { Card, Form, Button, Col, Row, InputGroup } from 'react-bootstrap';

type JobProps = {
    title: string;
    description: string;
}

function JobCard({ title, description }:JobProps){
    return (
        <Card className="job-card-container">
            <Card.Title className="job-title">
                {title}
            </Card.Title>
            <Card.Body>
                {description}
            </Card.Body>
        </Card>
    );
}

export default JobCard;
