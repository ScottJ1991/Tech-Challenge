import React from "react";
import { Col, Row } from "react-bootstrap";

const List = props => {
  return (
    <Row>
      <Col sm={2}>Event ID: {props.Event.id}</Col>
      <Col sm={3}>Event tilte: {props.Event.title}</Col>
      <Col sm={4}>Event description: {props.Event.description}</Col>
      <Col sm={3}>
        Organiser name: {props.Event.organiser.forename} {props.Event.organiser.surname}
      </Col>
    </Row>
  );
};

export default List;
