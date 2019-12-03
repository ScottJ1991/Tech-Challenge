import React, { Component } from "react";
import axios from "axios";
import { Col, Row, Card, ListGroup } from "react-bootstrap";

import Event from "./Event";
import { testUrl, gobalOffset, gobalSize } from "./staticVar";

class Report5 extends Component {
  state = {
    eventData: ""
  };

  componentDidMount() {
    axios.get(testUrl + "/chartData").then(res => {
      //console.log(res.data);
      this.setState({eventData: res.data});
    });
  }

  render() {
    if (!this.state.eventData || this.state.eventData.length < 1) {
      return <span>Loading...</span>;
    }

    return (
      <Row>
        <Col sm={{ span: gobalSize, offset: gobalOffset }}>
          <h3>Report of all events</h3>
          
          <Card>
            <ListGroup variant="flush">
              {this.state.eventData.map(event => (
                <ListGroup.Item key={event.ID}>
                  <Event Event={event} />
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default Report5;
