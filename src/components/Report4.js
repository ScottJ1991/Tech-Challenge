import React, { Component } from "react";
import axios from "axios";
import { Col, Row, DropdownButton, Dropdown } from "react-bootstrap";

import { testUrl, gobalOffset, gobalSize } from "./staticVar";
import Chart from "./Chart";

class Report4 extends Component {
  state = {
    yValue: 0,
    hidden: true,
    agile: [],
    cloud: [],
    ai: [],
    tagInfo: []
  };

  subjectValue(item, data) {
    let subBeg = data[0];
    let subImt = data[1];
    let subAdv = data[2];
    let subSME = data[3];
    let sub0 = data[4];
    let subBelow10 = data[5];
    let sub10Above = data[6];
    let subTotalAtt = data[7];

    subBeg = item.Level === "Beginner" ? subBeg + 1 : subBeg;
    subImt = item.Level === "Intermediate" ? subImt + 1 : subImt;
    subAdv = item.Level === "Advanced" ? subAdv + 1 : subAdv;
    subSME = item.Level === "SME" ? subSME + 1 : subSME;

    if (item.Attendees === 0) {
      sub0++;
    } else if (item.Attendees > 10) {
      sub10Above++;
    } else {
      subBelow10++;
    }

    subTotalAtt += item.Attendees;
    return [
      subBeg,
      subImt,
      subAdv,
      subSME,
      sub0,
      subBelow10,
      sub10Above,
      subTotalAtt
    ];
  }

  componentDidMount() {
    //subBeg[0] subImt[1] subAdv[2] subSME[3] sub0[4] subBelow10[5] sub10Above[6] subTotalAtt[7]
    let test = {
      agile: [0, 0, 0, 0, 0, 0, 0, 0],
      cloud: [0, 0, 0, 0, 0, 0, 0, 0],
      ai: [0, 0, 0, 0, 0, 0, 0, 0]
    };

    axios.get(testUrl + "/chartData").then(res => {
      //console.log(res.data);

      res.data.forEach(item => {
        if (item.Subject === "#agile") {
          test.agile = this.subjectValue(item, test.agile);
        } else if (item.Subject === "#cloud") {
          test.cloud = this.subjectValue(item, test.cloud);
        } else if (item.Subject === "#AI") {
          test.ai = this.subjectValue(item, test.ai);
        }
      });

      this.setState({ agile: test.agile, cloud: test.cloud, ai: test.ai });

      //to work out y
      this.setState({ yValue: 20 });
    });
  }

  handleChange = e => {
    //subName[0] subBeg[1] subImt[2] subAdv[3] subSME[4], sub0[5] subBelow10[6] sub10Above[7] subTotalAtt[8]
    if (e === "Agile") {
      this.setState({
        tagInfo: [
          e,
          this.state.agile[0],
          this.state.agile[1],
          this.state.agile[2],
          this.state.agile[3],
          this.state.agile[4],
          this.state.agile[5],
          this.state.agile[6],
          this.state.agile[7]
        ]
      });
    } else if (e === "AI") {
      this.setState({
        tagInfo: [
          e,
          this.state.ai[0],
          this.state.ai[1],
          this.state.ai[2],
          this.state.ai[3],
          this.state.ai[4],
          this.state.ai[5],
          this.state.ai[6],
          this.state.ai[7]
        ]
      });
    } else if (e === "Cloud") {
      this.setState({
        tagInfo: [
          e,
          this.state.cloud[0],
          this.state.cloud[1],
          this.state.cloud[2],
          this.state.cloud[3],
          this.state.cloud[4],
          this.state.cloud[5],
          this.state.cloud[6],
          this.state.cloud[7]
        ]
      });
    }
    this.setState({ hidden: false });
  };

  render() {
    if (!this.state.agile || this.state.agile.length < 1) {
      return <span>Loading...</span>;
    }

    return (
      <Row>
        <Col sm={{ span: gobalSize, offset: gobalOffset }}>
          <h3>Report by subject/level</h3>
          <Row>
            <Col>
              <DropdownButton title="Pick subject">
                <Dropdown.Item onSelect={this.handleChange} eventKey="Agile">
                  Agile
                </Dropdown.Item>
                <Dropdown.Item onSelect={this.handleChange} eventKey="AI">
                  AI
                </Dropdown.Item>
                <Dropdown.Item onSelect={this.handleChange} eventKey="Cloud">
                  Cloud
                </Dropdown.Item>
              </DropdownButton>
            </Col>
          </Row>
          <Row>
            <Col sm={5}>
              <Chart
                dataValues={[
                  this.state.agile[0] + this.state.cloud[0] + this.state.ai[0],
                  this.state.agile[1] + this.state.cloud[1] + this.state.ai[1],
                  this.state.agile[2] + this.state.cloud[2] + this.state.ai[2],
                  this.state.agile[3] + this.state.cloud[3] + this.state.ai[3],
                  0
                ]}
                eventType="E"
                chartTitle="All events"
                y={this.state.yValue}
              />
              <p>
                Total events held:{" "}
                {this.state.agile[0] +
                  this.state.cloud[0] +
                  this.state.ai[0] +
                  this.state.agile[1] +
                  this.state.cloud[1] +
                  this.state.ai[1] +
                  this.state.agile[2] +
                  this.state.cloud[2] +
                  this.state.ai[2] +
                  this.state.agile[3] +
                  this.state.cloud[3] +
                  this.state.ai[3]}
              </p>
              <Chart
                dataValues={[
                  this.state.agile[4] + this.state.cloud[4] + this.state.ai[4],
                  this.state.agile[5] + this.state.cloud[5] + this.state.ai[5],
                  this.state.agile[6] + this.state.cloud[6] + this.state.ai[6],
                  0
                ]}
                chartTitle="All event attendees range"
                y={this.state.yValue}
              />
              <p>
                Total attendees:{" "}
                {this.state.agile[7] + this.state.cloud[7] + this.state.ai[7]}
              </p>
            </Col>
            <Col sm={5} hidden={this.state.hidden}>
              <Chart
                dataValues={[
                  this.state.tagInfo[1],
                  this.state.tagInfo[2],
                  this.state.tagInfo[3],
                  this.state.tagInfo[4],
                  0
                ]}
                eventType="E"
                chartTitle={"Events for " + this.state.tagInfo[0]}
                y={this.state.yValue}
              />
              <p>
                Total events held for {this.state.tagInfo[0]}:{" "}
                {this.state.tagInfo[1] +
                  this.state.tagInfo[2] +
                  this.state.tagInfo[3] +
                  this.state.tagInfo[4]}
              </p>
              <Chart
                dataValues={[
                  this.state.tagInfo[5],
                  this.state.tagInfo[6],
                  this.state.tagInfo[7],
                  0
                ]}
                chartTitle={this.state.tagInfo[0] + " event attendees range"}
                y={this.state.yValue}
              />
              <p>
                Total attendees for {this.state.tagInfo[0]} events:{" "}
                {this.state.tagInfo[8]}
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default Report4;
