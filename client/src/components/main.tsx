import React, { useEffect, useState } from "react";
import "./main.css";
import { Col, Form, InputGroup, Row} from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import JobCard from "./JobCard/jobCard";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import emptyResImg from "../assests/nothing-found.png";

export interface Jobs {
    message: string;
    data:    Datum[];
}

export interface Datum {
    _id:            string;
    title:          string;
    description:    string;
    externalLink:   string;
    location:       string;
    hourlyPay:      number;
    employmentType: EmploymentType;
    weeklyHours:    number;
    ratingTotals:   number[];
    numberReviews:  number;
    datePosted:     Date;
    __v:            number;
}

export enum EmploymentType {
    FullTime = "Full time",
    PartTime = "Part time",
}

const Main = () => {
    let navigate = useNavigate();
    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token')

        if (authToken) {
            navigate('/main');
            fetchData();
        }

        if (!authToken) {
            navigate('/login');
        }
    }, [navigate])

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

    const [ allJobs, setAllJobs ] = useState<Datum[]>([]);
    const [ filteredJobs, setFilteredJobs ] = useState<Datum[]>([]);

    const [ locationFilter, setLocation ] = useState('');
    const [ searchFilter, setSearch ] = useState('');

    const [ jobTypes, setJobTypes ] = useState({
        fullTime: false,
        partTime: false
    });

    const [ averageRatings, setAverageRatings ] = useState({
        one: false,
        two: false,
        three: false,
        four: false,
        five: false
    })
    
    const [ minPay, setMinPay ] = useState(NaN);
    
    const [ minHours, setMinHours ] = useState(NaN);
    const [ maxHours, setMaxHours ] = useState(NaN);

    const fetchData = async () => {
        axios.get('api/jobs')
        .then(function (res : any) {
            let jobsRes = res.data.data;
            // for (let i=0; i<jobsRes.length; i++) {
            //     console.log(jobsRes[i])
            // }
            setAllJobs(jobsRes);
            setFilteredJobs(jobsRes);
        })
        .catch(function (error) {

        });
    }

    const locationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocation(e.target.value);
        filter(searchFilter, e.target.value, jobTypes, averageRatings, minPay, minHours, maxHours);
    }

    const searchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        filter(e.target.value, locationFilter, jobTypes, averageRatings, minPay, minHours, maxHours);
    }

    const handleJobTypesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newObj = {
            ...jobTypes,
            [e.target.id]: e.target.checked
        };
        setJobTypes(newObj);
        filter(searchFilter, locationFilter, newObj, averageRatings, minPay, minHours, maxHours);
    }

    const handleAvgRatingsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newObj = {
            ...averageRatings,
            [e.target.id]: e.target.checked
        };
        setAverageRatings(newObj);
        filter(searchFilter, locationFilter, jobTypes, newObj, minPay, minHours, maxHours);
    }

    const handleMinPayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMinPay(Number(e.target.value));
        filter(searchFilter, locationFilter, jobTypes, averageRatings, Number(e.target.value), minHours, maxHours);
    }

    const handleMinHoursChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let newMin = Number(e.target.value);
        if (isNaN(maxHours) && newMin >= maxHours) {
            newMin = maxHours - 1;
        }
        if (newMin < 1) {
            newMin = 1;
        }
        setMinHours(newMin);
        filter(searchFilter, locationFilter, jobTypes, averageRatings, minPay, newMin, maxHours);
    }

    const handleMaxHoursChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let newMax = Number(e.target.value);
        if (isNaN(minHours) && newMax <= minHours) {
            newMax = minHours + 1;
        }
        setMaxHours(newMax);
        filter(searchFilter, locationFilter, jobTypes, averageRatings, minPay, minHours, newMax);
    }

    const filter = (
            keyword: string,
            loc: string,
            jobTypesFilter: any,
            ratingsFilter: any,
            minPayFilter: number,
            minHoursFilter: number,
            maxHoursFilter: number) => {
        let results = [];
        if (keyword !== '') {
            results = allJobs.filter((job) => {
                return job.title.toLowerCase().includes(keyword.toLowerCase());
            });
        } else {
            results = [...allJobs];
        }

        if (loc !== '') {
            results = results.filter((job) => {
                return job.location.toLowerCase().includes(loc.toLowerCase());
            });
        }

        if (!Object.values(jobTypesFilter).every(o => o === false)) {
            let toBeIncluded: string | EmploymentType[] = [];
            if (jobTypesFilter.fullTime === true) {
                toBeIncluded.push(EmploymentType.FullTime);
            }
            if (jobTypesFilter.partTime === true) {
                toBeIncluded.push(EmploymentType.PartTime);
            }
            
            results = results.filter((job) => {
                return toBeIncluded.includes(job.employmentType);
            })
        }

        if (!Object.values(ratingsFilter).every(o => o === false)) {
            let toBeIncluded: number[] = [];
            if (ratingsFilter.one === true) {
                toBeIncluded.push(1);
            }
            if (ratingsFilter.two === true) {
                toBeIncluded.push(2);
            }
            if (ratingsFilter.three === true) {
                toBeIncluded.push(3);
            }
            if (ratingsFilter.four === true) {
                toBeIncluded.push(4);
            }
            if (ratingsFilter.five === true) {
                toBeIncluded.push(5);
            }
            console.log(toBeIncluded)
            results = results.filter((job) => {
                return toBeIncluded.includes(job.ratingTotals[0]);
            })
        }

        if (!isNaN(minPayFilter) && minPayFilter > 0) {
            results = results.filter((job) => {
                return job.hourlyPay >= minPayFilter;
            })
        }

        if (!isNaN(minHoursFilter) && minHoursFilter > 0) {
            results = results.filter((job) => {
                return job.weeklyHours >= minHoursFilter;
            })
        }

        if (!isNaN(maxHoursFilter) && maxHoursFilter > 0) {
            results = results.filter((job) => {
                return job.weeklyHours <= maxHoursFilter;
            })
        }

        console.log(results);

        setFilteredJobs(results);
    }

    const getAllJobCards = filteredJobs.map((job) => (
        <JobCard title={job.title}
            location={job.location}
            description={job.description}
            rating={job.ratingTotals[0]}
            detailsLink={`/detail/${job._id}`}
            externalLink={job.externalLink} />
    ));

    return (
        <div id="main-bg">
            <div className="main-search-container">
                <Form>
                    <Form.Group className="md" controlId="main-search-location">
                        <Form.Control type="search" placeholder="Location..."
                            onChange={locationChange} />
                    </Form.Group>
                </Form>
                <Form>
                    <Form.Group className="md" controlId="main-search-job">
                        <Form.Control type="search" placeholder="Search..."
                            onChange={searchChange} />
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
                            Min Hourly Pay
                        </Form.Label>
                        <Form.Group as={Row}>
                            <Col xs="12">
                                <InputGroup>
                                    <InputGroup.Text>$</InputGroup.Text>
                                    <Form.Control type="number" 
                                        onChange={handleMinPayChange} 
                                        value={minPay}  
                                        step={0.50}
                                        min={0.00}
                                        size='sm'/>
                                </InputGroup>
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
                                    onChange={handleMinHoursChange} 
                                    value={minHours} 
                                    min={1}
                                    size='sm'/>
                            </Col>
                            <Col xs="2">
                                -
                            </Col>
                            <Col xs="5">
                                <Form.Control type="number" 
                                    onChange={handleMaxHoursChange} 
                                    value={maxHours} 
                                    min={1}
                                    size='sm'/>
                            </Col>
                        </Form.Group>
                    </Form.Group>
                </section>

                <section className="main-jobs-section">
                    { getAllJobCards.length > 0
                        ?   getAllJobCards 
                        :   <div className="empty-results">
                                <h2>Nothing found!</h2>
                                <img src={emptyResImg} 
                                    height="300px"
                                    alt="empty-results-img" />
                            </div>
                    }
                </section>
            </div>
        </div>
    );
}

export default Main;
