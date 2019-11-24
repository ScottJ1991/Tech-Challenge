import React from "react";
import { Col, Row } from "react-bootstrap";

const Attendee = props => {
  //console.log({ props });
  return (
    <Row>
      <Col sm={2}>Attendee ID: {props.Attendee.id}</Col>
      <Col sm={5}>
        Attendee Name: {props.Attendee.forename} {props.Attendee.surename}
      </Col>
      <Col>Email: {props.Attendee.email}</Col>
    </Row>
  );
};

export default Attendee;
