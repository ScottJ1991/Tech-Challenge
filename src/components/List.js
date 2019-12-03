import React from "react";
import { Col, Row } from "react-bootstrap";

var startDate;
var endDate;
var eventDateRange;
var vDateFormat;
var vTimeFormat;
var month;

const timeFormat = props => {
  vTimeFormat = props[0] + ":" + props[1];
  return vTimeFormat;
};

const dateFormat = props => {
  if (props[1] === "1") {
    month = "Jan";
  } else if (props[1] === "2") {
    month = "Feb";
  } else if (props[1] === "3") {
    month = "Mar";
  } else if (props[1] === "4") {
    month = "Apr";
  } else if (props[1] === "5") {
    month = "May";
  } else if (props[1] === "6") {
    month = "Jun";
  } else if (props[1] === "7") {
    month = "Jul";
  } else if (props[1] === "8") {
    month = "Aug";
  } else if (props[1] === "9") {
    month = "Sep";
  } else if (props[1] === "10") {
    month = "Oct";
  } else if (props[1] === "11") {
    month = "Nov";
  } else if (props[1] === "12") {
    month = "Dec";
  }

  vDateFormat = props[2] + " " + month + " " + props[0];

  return vDateFormat;
};

const List = props => {
  startDate = props.Event.startTime.split("T");
  endDate = props.Event.endTime.split("T");

  if (startDate[0] === endDate[0]) {
    eventDateRange = dateFormat(startDate[0].split("-"));
  } else {
    eventDateRange =
      dateFormat(startDate[0].split("-")) +
      " to " +
      dateFormat(endDate[0].split("-"));
  }

  return (
    <Row>
      <Col sm={3}>Event title: {props.Event.title}</Col>
      <Col sm={9}>Event description: {props.Event.description}</Col>
      <Col sm={3}>
        Organiser name: {props.Event.organiser.forename}{" "}
        {props.Event.organiser.surname}
      </Col>
      <Col sm={4}>Date: {eventDateRange}</Col>
      <Col sm={4}>
        Time: {timeFormat(startDate[1].split(":"))} to{" "}
        {timeFormat(endDate[1].split(":"))}
      </Col>
    </Row>
  );
};

export default List;