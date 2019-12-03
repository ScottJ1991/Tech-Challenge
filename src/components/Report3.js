import React, { Component } from "react";
import axios from "axios";
import { Form, Button, Col, Row, Card, ListGroup } from "react-bootstrap";

import Attendee from "./attendee";
import { AWSUrl, gobalSize, gobalOffset } from "./staticVar";

class Report3 extends Component {
  state = {
    eventID: "",
    event: []
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    axios
      .get(AWSUrl + "/events/" + this.state.eventID + "/attendees")
      .then(res => {
        this.setState({ event: res.data });
      })
      .catch(error => {
        //console.log(error);
        //console.log(error.response.data)
        if (typeof error.response !== "undefined") {
          if (error.response.status === 400 || error.response.status === 500) {
            //this.setState({ events: error.response.data.reason })
            console.log(error.response.data.reason);
          }
        }
      });
  };

  render() {
    return (
      <Row>
        <Col sm={{ span: gobalSize, offset: gobalOffset }}>
          <h3>Report for attendees for an event</h3>
          <Form onSubmit={this.handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} sm="4" controlId="eventID">
                <Row>
                  <Form.Label column sm="3">
                    Event ID
                  </Form.Label>
                  <Col sm={9}>
                    <Form.Control
                      required
                      onChange={this.handleChange}
                      type="number"
                      placeholder="Enter an event ID"
                    />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form.Group>
            </Form.Row>
          </Form>

          <Card>
            <ListGroup variant="flush">
              {this.state.event.map(attendee => (
                <ListGroup.Item key={attendee.id}>
                  <Attendee Attendee={attendee} />
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default Report3;
