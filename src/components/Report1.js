import React, { Component } from "react";
import axios from "axios";
import { Form, Button, Col, Row, Card, ListGroup } from "react-bootstrap";

//39 showing customs childern could be use
import List from "./List";
import { baseUrl } from "./staticVar";

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
        "&to=" +
        this.state.to;
    } else if (this.state.from !== "") {
      wholeUrl =
        baseUrl +
        "/users/" +
        this.state.userId +
        "/events?from=" +
        this.state.from;
    } else if (this.state.to !== "") {
      wholeUrl =
        baseUrl + "/users/" + this.state.userId + "/events?to=" + this.state.to;
    } else {
      wholeUrl = baseUrl + "/users/" + this.state.userId + "/events";
    }

    axios.get(wholeUrl).then(res => {
      if (res.status === 400) {
        //console.log(res);
      } else if (res.status === 500) {
        console.log(res);
      } else if (res.status === 200) {
        //console.log(res);
        this.setState({ events: res.data });
        //console.log(this.state);
      }
    });

    //this.setState({from: "", to: ""});
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
