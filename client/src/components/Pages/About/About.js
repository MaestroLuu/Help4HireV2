import React from "react";
import { Card } from "react-bootstrap";

export default function About() {
  return (
    <div className="d-flex justify-content-center">
      <Card style={{ width: "50%" }} className="text-center p-4 m-4">
        <Card.Title>About Us</Card.Title>
        <Card.Text>
          Have a chore that you don't want to do and willing to pay someone to
          take care of it? Simply post the job and submit a price and anyone can
          respond to take care of it for you.
        </Card.Text>
        <Card.Text>
          Have a few free hours and want to earn some quick cash? Just look on
          the job board and select a job that appeals the most to you.
          Communicate with each other via the contacts provided and always be
          sure to check your sources before hiring/completing a job. <br />
          <br /> Happy hunting!
        </Card.Text>
      </Card>
    </div>
  );
}
