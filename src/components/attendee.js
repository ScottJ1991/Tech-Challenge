import React from "react";
import { Col, Row } from "react-bootstrap";

const Attendee = props => {
  //console.log({ props });
  let name = "";
  let email = "";
  
  name = props.Attendee.forename === null ? "Unknown" : props.Attendee.forename + " " + props.Attendee.surname;
  email = props.Attendee.email === null ? "Unknown" : props.Attendee.email;

  return (
    <Row>
      <Col sm={2}>Attendee ID: {props.Attendee.id}</Col>
      <Col sm={5}>Attendee Name: {name}</Col>
      <Col>Email: {email}</Col>
    </Row>
  );
};

export default Attendee;
