import React from "react";
import { Col, Row } from "react-bootstrap";

const Event = props => {
  //console.log({ props });
  var fromatDate = "";
  if (props.Event.Date.includes("/01/")) {
    fromatDate = props.Event.Date.replace("/01/", " Jan ");
  } else if (props.Event.Date.includes("/02/")) {
    fromatDate = props.Event.Date.replace("/02/", " Feb ");
  } else if (props.Event.Date.includes("/03/")) {
    fromatDate = props.Event.Date.replace("/03/", " Mar ");
  } else if (props.Event.Date.includes("/04/")) {
    fromatDate = props.Event.Date.replace("/04/", " Apr ");
  } else if (props.Event.Date.includes("/05/")) {
    fromatDate = props.Event.Date.replace("/05/", " May ");
  } else if (props.Event.Date.includes("/06/")) {
    fromatDate = props.Event.Date.replace("/06/", " Jun ");
  } else if (props.Event.Date.includes("/07/")) {
    fromatDate = props.Event.Date.replace("/07/", " Jul ");
  } else if (props.Event.Date.includes("/08/")) {
    fromatDate = props.Event.Date.replace("/08/", " Aug ");
  } else if (props.Event.Date.includes("/09/")) {
    fromatDate = props.Event.Date.replace("/09/", " Sep ");
  } else if (props.Event.Date.includes("/10/")) {
    fromatDate = props.Event.Date.replace("/10/", " Oct ");
  } else if (props.Event.Date.includes("/11/")) {
    fromatDate = props.Event.Date.replace("/11/", " Nov ");
  } else if (props.Event.Date.includes("/12/")) {
    fromatDate = props.Event.Date.replace("/12/", " Dec ");
  }

  var subject = props.Event.Subject.replace("#", "");

  return (
    <Row>
      <Col sm={2}>Event ID: {props.Event.ID}</Col>
      <Col sm={4}>Title: {props.Event.Title}</Col>
      <Col sm={2}>Date: {fromatDate}</Col>
      <Col sm={3}>Host: {props.Event.Host}</Col>
      <Col sm={2}>Subject: {subject}</Col>
      <Col sm={3}>Level: {props.Event.Level}</Col>
    </Row>
  );
};

export default Event;
