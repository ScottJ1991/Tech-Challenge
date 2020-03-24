import React, { Component } from "react";
import axios from "axios";
import { Form, Button, Col, Row, Card, ListGroup } from "react-bootstrap";

import List from "./List";
import { testUrl, gobalOffset, gobalSize } from "./staticVar";

class Report2 extends Component {
  state = {
    userId: "",
    events: []
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    axios
      .get(testUrl + "/events?organiserId=" + this.state.userId)
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
      <Row>
        <Col sm={{ span: gobalSize, offset: gobalOffset }}>
          <h3>Report for events an organiser has held</h3>
          <Form onSubmit={this.handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} sm="4" controlId="userId">
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
        </Col>
      </Row>
    );
  }
}

export default Report2;
