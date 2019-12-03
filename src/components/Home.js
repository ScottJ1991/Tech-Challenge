import React from "react";
import { Col, Row } from "react-bootstrap";

const Home = () => {
  return (
    <Row>
      <Col sm={{ span: 6, offset: 3 }}>
        <h3>Welcome to the Simpsons Teach Challenge</h3>
        <ul>
          <li>Report one is events attended by a person</li>
          <li>Report two is events a organiser as held</li>
          <li>Report three is attendees for an event</li>
          <li>Report four is ????</li>
        </ul>
      </Col>
    </Row>
  );
};

export default Home;
