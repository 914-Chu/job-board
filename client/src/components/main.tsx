import React from "react";
import "./main.css";
import { Col, Form, Row} from "react-bootstrap";
import {FaStar} from "react-icons/fa";
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
    
    const [ minPay, setMinPay ] = React.useState(15);
    const [ maxPay, setMaxPay ] = React.useState(100);
    
    const [ minHours, setMinHours ] = React.useState(10);
    const [ maxHours, setMaxHours ] = React.useState(40);

    return (
        <div id="main-bg">
            <div className="main-search-container">
                <Form>
                    <Form.Group className="md" controlId="main-search-location">
                        <Form.Control type="search" placeholder="Location" />
                    </Form.Group>
                </Form>
                <Form>
                    <Form.Group className="md" controlId="main-search-job">
                        <Form.Control type="search" placeholder="Search" />
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
                        <Form.Check type="checkbox" label="Full time" />
                        <Form.Check type="checkbox" label="Part time" />
                    </Form.Group>

                    <Form.Group as={Row} controlId="job-average-rating">
                        <Form.Label>
                            Average Ratings
                        </Form.Label>
                        <Form.Check type="checkbox">
                            <Form.Check.Input type="checkbox" />
                            <Form.Check.Label>
                                {getNStars(1)}
                            </Form.Check.Label>
                        </Form.Check>
                        <Form.Check type="checkbox">
                            <Form.Check.Input type="checkbox" />
                            <Form.Check.Label>
                                {getNStars(2)}
                            </Form.Check.Label>
                        </Form.Check>
                        <Form.Check type="checkbox">
                            <Form.Check.Input type="checkbox" />
                            <Form.Check.Label>
                                {getNStars(3)}
                            </Form.Check.Label>
                        </Form.Check>
                        <Form.Check type="checkbox">
                            <Form.Check.Input type="checkbox" />
                            <Form.Check.Label>
                                {getNStars(4)}
                            </Form.Check.Label>
                        </Form.Check>
                        <Form.Check type="checkbox">
                            <Form.Check.Input type="checkbox" />
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
                        description="TThis is the description for the fullstack web development intern postion. It is used to provide context to the job listed and see if the user is actually interested in applying for the job."
                        rating={4}
                        link="#" />
                    <JobCard title="Development and Operations Developer" 
                        description="TThis is the description for the fullstack web development intern postion. It is used to provide context to the job listed and see if the user is actually interested in applying for the job."
                        rating={5}
                        link="#" />
                    <JobCard title="Development and Operations Developer" 
                        description="TThis is the description for the fullstack web development intern postion. It is used to provide context to the job listed and see if the user is actually interested in applying for the job."
                        rating={1}
                        link="#" />
                    <JobCard title="Development and Operations Developer" 
                        description="TThis is the description for the fullstack web development intern postion. It is used to provide context to the job listed and see if the user is actually interested in applying for the job."
                        rating={2}
                        link="#" />
                    <JobCard title="Development and Operations Developer" 
                        description="TThis is the description for the fullstack web development intern postion. It is used to provide context to the job listed and see if the user is actually interested in applying for the job."
                        rating={2}
                        link="#" />
                </section>
            </div>
        </div>
    );
}

export default Main;