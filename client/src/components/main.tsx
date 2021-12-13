import React, { useState } from "react";
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

    const [ locationFilter, setLocation ] = useState('');
    const [ searchFilter, setSearch ] = useState('');

    const [ jobTypes, setJobTypes ] = useState({
        fullTime: true,
        partTime: true
    });

    const [ averageRatings, setAverageRatings ] = useState({
        one: true,
        two: true,
        three: true,
        four: true,
        five: true
    })
    
    const [ minPay, setMinPay ] = useState(15);
    const [ maxPay, setMaxPay ] = useState(100);
    
    const [ minHours, setMinHours ] = useState(10);
    const [ maxHours, setMaxHours ] = useState(40);

    const handleJobTypesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setJobTypes({
            ...jobTypes,
            [e.target.id]: !e.target.value
        });
    }

    const handleAvgRatingsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAverageRatings({
            ...averageRatings,
            [e.target.id]: !e.target.value
        });
    }

    return (
        <div id="main-bg">
            <div className="main-search-container">
                <Form>
                    <Form.Group className="md" controlId="main-search-location">
                        <Form.Control type="search" placeholder="Location..."
                            value={locationFilter}
                            onChange={(e) => {setLocation(e.target.value)}} />
                    </Form.Group>
                </Form>
                <Form>
                    <Form.Group className="md" controlId="main-search-job">
                        <Form.Control type="search" placeholder="Search..."
                            value={searchFilter}
                            onChange={(e) => {setSearch(e.target.value)}} />
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
                        detailsLink="/detail"
                        externalLink="/detail" />
                    <JobCard title="Frontend Developer" 
                        description="This is the description for the fullstack web development intern postion. It is used to provide context to the job listed and see if the user is actually interested in applying for the job."
                        rating={4}
                        detailsLink="/detail"
                        externalLink="/detail" />
                    <JobCard title="Development and Operations Developer" 
                        description="This is the description for the fullstack web development intern postion. It is used to provide context to the job listed and see if the user is actually interested in applying for the job."
                        rating={5}
                        detailsLink="/detail"
                        externalLink="/detail" />
                    <JobCard title="Development and Operations Developer" 
                        description="This is the description for the fullstack web development intern postion. It is used to provide context to the job listed and see if the user is actually interested in applying for the job."
                        rating={1}
                        detailsLink="/detail"
                        externalLink="/detail" />
                    <JobCard title="Development and Operations Developer" 
                        description="This is the description for the fullstack web development intern postion. It is used to provide context to the job listed and see if the user is actually interested in applying for the job."
                        rating={2}
                        detailsLink="/detail"
                        externalLink="/detail" />
                    <JobCard title="Development and Operations Developer" 
                        description="This is the description for the fullstack web development intern postion. It is used to provide context to the job listed and see if the user is actually interested in applying for the job."
                        rating={2}
                        detailsLink="/detail"
                        externalLink="/detail" />
                </section>
            </div>
        </div>
    );
}

export default Main;
