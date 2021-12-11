import React from "react";
import "./main.css";
import { Form, Row, Col, InputGroup, Button } from "react-bootstrap";
import { faSearchLocation, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Main = () => {
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
            </section>

            <section className="main-jobs-section">
                hii
            </section>
        </div>
    </div>
  );
}

export default Main;