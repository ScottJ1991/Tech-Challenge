import React, { Component } from "react";
import axios from "axios";
import { Col, Row, DropdownButton, Dropdown } from "react-bootstrap";

import { testUrl, gobalOffset, gobalSize } from "./staticVar";
import Chart from "./Chart";

class Report4 extends Component {
  state = {
    agileBeg: 0,
    agileImt: 0,
    cloudBeg: 0,
    cloudImt: 0,
    AIBeg: 0,
    AIimt: 0,
    totalBeg: 0,
    totalImt: 0,
    tag: "",
    tagBeg: 0,
    tagImt: 0,
    yValue: 0
  };

  componentDidMount() {
    let agBeg = 0;
    let agImt = 0;
    let cBeg = 0;
    let cImt = 0;
    let aiBeg = 0;
    let aiimt = 0;

    axios.get(testUrl + "/chartData").then(res => {
      //console.log(res.data);

      res.data.forEach(function(item, index) {
        //console.log(item, index);
        if (item.Subject === "#agile") {
          if (item.Level === "Beginner") {
            agBeg = agBeg + 1;
          } else if (item.Level === "Intermediate") {
            agImt = agImt + 1;
          }
        } else if (item.Subject === "#cloud") {
          if (item.Level === "Beginner") {
            cBeg = cBeg + 1;
          } else if (item.Level === "Intermediate") {
            cImt = cImt + 1;
          }
        } else if (item.Subject === "#AI") {
          if (item.Level === "Beginner") {
            aiBeg = aiBeg + 1;
          } else if (item.Level === "Intermediate") {
            aiimt = aiimt + 1;
          }
        }
      });

      this.setState({ agileBeg: agBeg });
      this.setState({ agileImt: agImt });
      this.setState({ cloudBeg: cBeg });
      this.setState({ cloudImt: cImt });
      this.setState({ AIBeg: aiBeg });
      this.setState({ AIimt: aiimt });
      this.setState({ totalBeg: agBeg + cBeg + aiBeg });
      this.setState({ totalImt: agImt + cImt + aiimt });

      if (agBeg + cBeg + aiBeg > agImt + cImt + aiimt) {
        this.setState({ yValue: agBeg + cBeg + aiBeg + 3 });
      } else {
        this.setState({ yValue: agImt + cImt + aiimt + 3 });
      }
    });
  }

  handleChange = e => {
    //console.log(e);
    this.setState({ tag: e });

    if (e === "Cloud") {
      this.setState({ tagBeg: this.state.cloudBeg });
      this.setState({ tagImt: this.state.cloudImt });
    } else if (e === "AI") {
      this.setState({ tagBeg: this.state.AIBeg });
      this.setState({ tagImt: this.state.AIimt });
    } else if (e === "Agile") {
      this.setState({ tagBeg: this.state.agileBeg });
      this.setState({ tagImt: this.state.agileImt });
    }
  };

  render() {
    return (
      <Row>
        <Col sm={{ span: gobalSize, offset: gobalOffset }}>
          <h3>Report ?????</h3>
          <Row>
            <Col>
              <DropdownButton title="Pick subject">
                <Dropdown.Item onSelect={this.handleChange} eventKey="Agile">
                  Agile
                </Dropdown.Item>
                <Dropdown.Item onSelect={this.handleChange} eventKey="Cloud">
                  Cloud
                </Dropdown.Item>
                <Dropdown.Item onSelect={this.handleChange} eventKey="AI">
                  AI
                </Dropdown.Item>
              </DropdownButton>
            </Col>
          </Row>
          <Row>
            <Col sm={5}>
              <Chart
                dataValues={[this.state.totalBeg, this.state.totalImt, 0]}
                chartTitle="All events"
                y={this.state.yValue}
              />
            </Col>
            <Col sm={5}>
              <Chart
                dataValues={[this.state.tagBeg, this.state.tagImt, 0]}
                chartTitle={"Events for " + this.state.tag}
                y={this.state.yValue}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default Report4;
