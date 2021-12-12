import React from "react";
import "./main.css";
import { Form, Row} from "react-bootstrap";
import {FaStar} from "react-icons/fa";

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
                        <Form.Check type="checkbox" label="Full time" />
                        <Form.Check type="checkbox" label="Part time" />
                    </Form.Group>

                    <Form.Group as={Row} controlId="job-weekly-hours-range">
                        <Form.Label>
                            Weekly Hours
                        </Form.Label>
                        <Form.Check type="checkbox" label="Full time" />
                        <Form.Check type="checkbox" label="Part time" />
                    </Form.Group>
                </section>

                <section className="main-jobs-section">
                    hii
                </section>
            </div>
        </div>
    );
}

export default Main;