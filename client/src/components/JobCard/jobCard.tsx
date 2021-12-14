import React from 'react';
import './jobCard.css';
import { Card, Button } from 'react-bootstrap';
import {FaStar} from "react-icons/fa";
import { Link } from 'react-router-dom';

type JobProps = {
    title: string;
    description: string;
    rating: number;
    detailsLink: string;
    externalLink: string;
}

function JobCard({ title, description, rating, detailsLink, externalLink }:JobProps){

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
        <Card as={Link} className="job-card-container" to={detailsLink}>
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
                    <Link to={externalLink}>
                        <Button className="job-apply">
                            Apply
                        </Button>
                    </Link>
                </div>
            </Card.Body>
        </Card>
    );
}

export default JobCard;
