import React from 'react';
import './jobCard.css';
import { Card, Button } from 'react-bootstrap';
import {FaStar} from "react-icons/fa";

type JobProps = {
    title: string;
    description: string;
    rating: number;
    link: string;
}

function JobCard({ title, description, rating, link }:JobProps){

    const getNStars = (n: number) => {
        var components = [];
        for (let i = 0; i < 5; i++) {
            if (i >= n) {
                components.push(<FaStar color="#e4e5e9" />);
            } else {
                components.push(<FaStar color="#e25632" />);
            }
        }
        return components;
    }

    return (
        <Card className="job-card-container">
            <Card.Title className="job-title">
                {title}
            </Card.Title>
            <Card.Body className="job-body">
                <div className="job-description">
                    {description}
                </div>
                <div className="job-rating">
                    <div className="stars-container">
                        {getNStars(rating)}
                    </div>
                </div>
                <div>
                    <Button className="job-apply">
                        Apply
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
}

export default JobCard;
