import React from "react";
import "./main.css";
import { Col, Form, Row} from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import JobCard from "./JobCard/jobCard";

const Main = () => {
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

    const [ jobTypes, setJobTypes ] = React.useState({
        fullTime: true,
        partTime: true
    });

    const [ averageRatings, setAverageRatings ] = React.useState({
        one: true,
        two: true,
        three: true,
        four: true,
        five: true
    })
    
    const [ minPay, setMinPay ] = React.useState(15);
    const [ maxPay, setMaxPay ] = React.useState(100);
    
    const [ minHours, setMinHours ] = React.useState(10);
    const [ maxHours, setMaxHours ] = React.useState(40);

    const handleJobTypesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.id === 'fullTime') {
            jobTypes.fullTime = !jobTypes.fullTime;
        } else {
            jobTypes.partTime = !jobTypes.partTime;
        }

        setJobTypes({...jobTypes});
    }

    const handleAvgRatingsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.id === 'one') {
            averageRatings.one = !averageRatings.one;
        } else if (e.target.id === 'two') {
            averageRatings.two = !averageRatings.two;
        } else if (e.target.id === 'three') {
            averageRatings.three = !averageRatings.three;
        } else if (e.target.id === 'four') {
            averageRatings.four = !averageRatings.four;
        } else {
            averageRatings.five = !averageRatings.five;
        }

        setAverageRatings({...averageRatings});
    }

    return (
        <div id="main-bg">
            <div className="main-search-container">
                <Form>
                    <Form.Group className="md" controlId="main-search-location">
                        <Form.Control type="search" placeholder="Location..." />
                    </Form.Group>
                </Form>
                <Form>
                    <Form.Group className="md" controlId="main-search-job">
                        <Form.Control type="search" placeholder="Search..." />
                    </Form.Group>
                </Form>
            </div>

            <div className="main-section-titles">
                <h5>
                    Filters
                </h5>
                <h5>
                    Jobs
                </h5>
            </div>

            <div className="main-section-container">
                <section className="main-filter-section">
                    <Form.Group as={Row} controlId="job-type">
                        <Form.Label>
                            Job Type
                        </Form.Label>
                        <Form.Check type="checkbox" id="fullTime" label="Full time"
                            checked={jobTypes.fullTime}
                            onChange={handleJobTypesChange} />
                        <Form.Check type="checkbox" id="partTime" label="Part time"
                            checked={jobTypes.partTime}
                            onChange={handleJobTypesChange} />
                    </Form.Group>

                    <Form.Group as={Row} controlId="job-average-rating">
                        <Form.Label>
                            Average Ratings
                        </Form.Label>
                        <Form.Check type="checkbox">
                            <Form.Check.Input type="checkbox" id="one"
                                checked={averageRatings.one}
                                onChange={handleAvgRatingsChange} />
                            <Form.Check.Label>
                                {getNStars(1)}
                            </Form.Check.Label>
                        </Form.Check>
                        <Form.Check type="checkbox">
                            <Form.Check.Input type="checkbox" id="two"
                                checked={averageRatings.two}
                                onChange={handleAvgRatingsChange} />
                            <Form.Check.Label>
                                {getNStars(2)}
                            </Form.Check.Label>
                        </Form.Check>
                        <Form.Check type="checkbox">
                            <Form.Check.Input type="checkbox" id="three"
                                checked={averageRatings.three}
                                onChange={handleAvgRatingsChange} />
                            <Form.Check.Label>
                                {getNStars(3)}
                            </Form.Check.Label>
                        </Form.Check>
                        <Form.Check type="checkbox">
                            <Form.Check.Input type="checkbox" id="four"
                                checked={averageRatings.four}
                                onChange={handleAvgRatingsChange} />
                            <Form.Check.Label>
                                {getNStars(4)}
                            </Form.Check.Label>
                        </Form.Check>
                        <Form.Check type="checkbox">
                            <Form.Check.Input type="checkbox" id="five"
                                checked={averageRatings.five}
                                onChange={handleAvgRatingsChange} />
                            <Form.Check.Label>
                                {getNStars(5)}
                            </Form.Check.Label>
                        </Form.Check>
                    </Form.Group>

                    <Form.Group as={Row} controlId="job-pay-range">
                        <Form.Label>
                            Hourly Pay
                        </Form.Label>
                        <Form.Group as={Row}>
                            <Col xs="5">
                                <Form.Control type="number" 
                                    onChange={e => {setMinPay(Number(e.target.value))}} 
                                    value={minPay} 
                                    size='sm'/>
                            </Col>
                            <Col xs="2">
                                -
                            </Col>
                            <Col xs="5">
                                <Form.Control type="number" 
                                    onChange={e => {setMaxPay(Number(e.target.value))}} 
                                    value={maxPay} 
                                    size='sm'/>
                            </Col>
                        </Form.Group>
                    </Form.Group>

                    <Form.Group as={Row} controlId="job-weekly-hours-range">
                        <Form.Label>
                            Weekly Hours
                        </Form.Label>
                        <Form.Group as={Row}>
                            <Col xs="5">
                                <Form.Control type="number" 
                                    onChange={e => {setMinHours(Number(e.target.value))}} 
                                    value={minHours} 
                                    size='sm'/>
                            </Col>
                            <Col xs="2">
                                -
                            </Col>
                            <Col xs="5">
                                <Form.Control type="number" 
                                    onChange={e => {setMaxHours(Number(e.target.value))}} 
                                    value={maxHours} 
                                    size='sm'/>
                            </Col>
                        </Form.Group>
                    </Form.Group>
                </section>

                <section className="main-jobs-section">
                    <JobCard title="Full-Stack Developer"
                        description="This is the description for the fullstack web development intern postion. It is used to provide context to the job listed and see if the user is actually interested in applying for the job."
                        rating={3}
                        link="#" />
                    <JobCard title="Frontend Developer" 
                        description="This is the description for the fullstack web development intern postion. It is used to provide context to the job listed and see if the user is actually interested in applying for the job."
                        rating={4}
                        link="#" />
                    <JobCard title="Development and Operations Developer" 
                        description="This is the description for the fullstack web development intern postion. It is used to provide context to the job listed and see if the user is actually interested in applying for the job."
                        rating={5}
                        link="#" />
                    <JobCard title="Development and Operations Developer" 
                        description="This is the description for the fullstack web development intern postion. It is used to provide context to the job listed and see if the user is actually interested in applying for the job."
                        rating={1}
                        link="#" />
                    <JobCard title="Development and Operations Developer" 
                        description="This is the description for the fullstack web development intern postion. It is used to provide context to the job listed and see if the user is actually interested in applying for the job."
                        rating={2}
                        link="#" />
                    <JobCard title="Development and Operations Developer" 
                        description="This is the description for the fullstack web development intern postion. It is used to provide context to the job listed and see if the user is actually interested in applying for the job."
                        rating={2}
                        link="#" />
                </section>
            </div>
        </div>
    );
}

export default Main;
