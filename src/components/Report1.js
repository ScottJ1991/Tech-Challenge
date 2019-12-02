import React, { Component } from "react";
import axios from "axios";
import { Form, Button, Col, Row, Card, ListGroup } from "react-bootstrap";

import List from "./List";
import { baseUrl } from "./staticVar";

var dateStartTime = "T00:00:00.000Z";
var endStartTime = "T24:00:00.000Z";

class Report1 extends Component {
  state = {
    userId: "",
    from: "",
    to: "",
    events: []
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = e => {
    let wholeUrl = "";
    e.preventDefault();
    this.setState({ events: [] });
    //https://www.youtube.com/watch?v=4uzEUATtNHQ&list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG&index=30&t=0s

    if (this.state.from !== "" && this.state.to !== "") {
      wholeUrl =
        baseUrl +
        "/users/" +
        this.state.userId +
        "/events?from=" +
        this.state.from +
        dateStartTime +
        "&to=" +
        this.state.to +
        endStartTime;
    } else if (this.state.from !== "") {
      wholeUrl =
        baseUrl +
        "/users/" +
        this.state.userId +
        "/events?from=" +
        this.state.from +
        dateStartTime;
    } else if (this.state.to !== "") {
      wholeUrl =
        baseUrl +
        "/users/" +
        this.state.userId +
        "/events?to=" +
        this.state.to +
        endStartTime;
    } else {
      wholeUrl = baseUrl + "/users/" + this.state.userId + "/events";
    }

    axios
      .get(wholeUrl)
      .then(res => {
        this.setState({ events: res.data });
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
      <div>
        <h3>Report for events attended by a person</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} sm="3" controlId="userId">
              <Row>
                <Form.Label column sm="3">
                  User ID
                </Form.Label>
                <Col sm={9}>
                  <Form.Control
                    required
                    onChange={this.handleChange}
                    type="number"
                    placeholder="Enter an user ID"
                  />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group as={Col} sm="3" controlId="from">
              <Row>
                <Form.Label column sm="4">
                  Start date
                </Form.Label>
                <Col sm={8}>
                  <Form.Control onChange={this.handleChange} type="date" />
                </Col>
              </Row>
            </Form.Group>
            <Form.Group as={Col} sm="3" controlId="to">
              <Row>
                <Form.Label column sm="4">
                  End date
                </Form.Label>
                <Col sm={8}>
                  <Form.Control onChange={this.handleChange} type="date" />
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
            {this.state.events.map(event => (
              <ListGroup.Item key={event.id}>
                <List Event={event} />
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card>
      </div>
    );
  }
}

export default Report1;
