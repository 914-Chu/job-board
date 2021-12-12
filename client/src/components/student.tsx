import React from "react";
import "./student.css";
import Stars from "./stars";
import { Card } from "react-bootstrap";

type Props = {
  id: number | string;
  date: Date;
  name: string;
  headline: string;
  review: string;
  rate: number[];
};

const Student = ({ id, date, name, headline, review, rate }: Props) => {
  return (
    <div className="student-container">
      <Card id="student-content">
        <Card.Body>
          <Card.Title id="student-name">{name}</Card.Title>
          <div className="rate-headline-container">
            <Stars starsize={20} starval={rate[0]}/>
            <Card.Text className="student-headline">{headline}</Card.Text>
          </div>
          <Card.Text id="student-date">{date.toLocaleString()}</Card.Text>
          <Card.Text>{review}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Student;
