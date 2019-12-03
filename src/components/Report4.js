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
    tagTotalAtt: 0,
    tagTotalEvent: 0,
    yValue: 0,
    hidden: true,
    agile0: 0,
    agile10: 0,
    agile10more: 0,
    cloud0: 0,
    cloud10: 0,
    cloud10more: 0,
    AI0: 0,
    AI10: 0,
    AI10more: 0,
    TotalEvents: 0,
    TotalAtte: 0,
    TotalAgileEvents: 0,
    TotalAgileAtt: 0,
    TotalcloudEvents: 0,
    TotalcloudAtt: 0,
    TotalAIEvents: 0,
    TotalAIAtt: 0,
    tag0: 0,
    tag10: 0,
    tag10more: 0
  };

  componentDidMount() {
    let agBeg = 0;
    let agImt = 0;
    let cBeg = 0;
    let cImt = 0;
    let aiBeg = 0;
    let aiimt = 0;
    let vag0 = 0;
    let vag10 = 0;
    let vag10more = 0;
    let vc0 = 0;
    let vc10 = 0;
    let vc10more = 0;
    let vai0 = 0;
    let vai10 = 0;
    let vai10more = 0;
    let totalA = 0;
    let agTotalAtt = 0;
    let aiTotalAtt = 0;
    let cTotalAtt = 0;

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

          if (item.Attendees === 0) {
            vag0 = vag0 + 1;
          } else if (item.Attendees > 10) {
            vag10more = vag10more + 1;
          } else {
            vag10 = vag10 + 1;
          }
          agTotalAtt = agTotalAtt + item.Attendees;
          //console.log("agile " + item.Attendees)
          // console.log("0: " + vag0 + "  -10: " + vag10 + " 10+: " + vag10more)
        } else if (item.Subject === "#cloud") {
          if (item.Level === "Beginner") {
            cBeg = cBeg + 1;
          } else if (item.Level === "Intermediate") {
            cImt = cImt + 1;
          }

          if (item.Attendees === 0) {
            vc0 = vc0 + 1;
          } else if (item.Attendees > 10) {
            vc10more = vc10more + 1;
          } else {
            vc10 = vc10 + 1;
          }

          cTotalAtt = cTotalAtt + item.Attendees;
          //console.log("cloud " + item.Attendees)
          //console.log("0: " + vc0 + "  -10: " + vc10 + " 10+: " + vc10more)
        } else if (item.Subject === "#AI") {
          if (item.Level === "Beginner") {
            aiBeg = aiBeg + 1;
          } else if (item.Level === "Intermediate") {
            aiimt = aiimt + 1;
          }
          if (item.Attendees === 0) {
            vai0 = vai0 + 1;
          } else if (item.Attendees > 10) {
            vai10more = vai10more + 1;
          } else {
            vai10 = vai10 + 1;
          }

          aiTotalAtt = aiTotalAtt + item.Attendees;
          //console.log("AI " + item.Attendees)
          //console.log("0: " + vai0 + "  -10: " + vai10 + " 10+: " + vai10more)
        }

        totalA = totalA + item.Attendees;
      });

      this.setState({ agileBeg: agBeg, agileImt: agImt });
      this.setState({ cloudBeg: cBeg, cloudImt: cImt });
      this.setState({ AIBeg: aiBeg, AIimt: aiimt });
      this.setState({
        totalBeg: agBeg + cBeg + aiBeg,
        totalImt: agImt + cImt + aiimt
      });
      this.setState({
        TotalAtte: totalA,
        TotalEvents: agBeg + cBeg + aiBeg + agImt + cImt + aiimt
      });
      this.setState({
        TotalAgileAtt: agTotalAtt,
        TotalAgileEvents: agBeg + agImt
      });
      this.setState({ TotalAIAtt: aiTotalAtt, TotalAIEvents: aiBeg + aiimt });
      this.setState({
        TotalcloudAtt: cTotalAtt,
        TotalcloudEvents: cBeg + cImt
      });
      this.setState({
        tol0: vai0 + vag0 + vc0,
        tol10: vai10 + vag10 + vc10,
        tol10more: vai10more + vag10more + vc10more
      });
      this.setState({ agile0: vag0, agile10: vag10, agile10more: vag10more });
      this.setState({ AI0: vai0, AI10: vai10, AI10more: vai10more });
      this.setState({ cloud0: vc0, cloud10: vc10, cloud10more: vc10more });

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
      this.setState({
        tagBeg: this.state.cloudBeg,
        tagImt: this.state.cloudImt
      });
      this.setState({
        tagTotalAtt: this.state.TotalcloudAtt,
        tagTotalEvent: this.state.TotalcloudEvents
      });
      this.setState({ tag0: this.state.cloud0 });
      //console.log("state Cl 0: " + this.state.cloud0);
      this.setState({ tag10: this.state.cloud10 });
      //console.log("state Cl -10: " + this.state.cloud10);
      this.setState({ tag10more: this.state.cloud10more });
      //console.log("state Cl 10+: " + this.state.cloud10more);
    } else if (e === "AI") {
      this.setState({ tagBeg: this.state.AIBeg, tagImt: this.state.AIimt });
      this.setState({
        tagTotalAtt: this.state.TotalAIAtt,
        tagTotalEvent: this.state.TotalAIEvents
      });
      this.setState({ tag0: this.state.AI0 });
      //console.log("state AI 0: " + this.state.AI0);
      this.setState({ tag10: this.state.AI10 });
      //console.log("state AI -10: " + this.state.AI10);
      this.setState({ tag10more: this.state.AI10more });
      //console.log("state AI 10+: " + this.state.AI10more);
    } else if (e === "Agile") {
      this.setState({
        tagBeg: this.state.agileBeg,
        tagImt: this.state.agileImt
      });
      this.setState({
        tagTotalAtt: this.state.TotalAgileAtt,
        tagTotalEvent: this.state.TotalAgileEvents
      });
      this.setState({ tag0: this.state.agile0 });
      //console.log("state Ag 0: " + this.state.agile0);
      this.setState({ tag10: this.state.agile10 });
      //console.log("state Ag -10: " + this.state.agile10);
      this.setState({ tag10more: this.state.agile10more });
      //console.log("state Ag 10+: " + this.state.agile10more);
    }
    this.setState({ hidden: false });
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
                label={["Beginner", "Intermediate"]}
                eventType="E"
                chartTitle="All events"
                y={this.state.yValue}
              />
              <p>Total events held: {this.state.TotalEvents}</p>
              <Chart
                dataValues={[
                  this.state.tol0,
                  this.state.tol10,
                  this.state.tol10more,
                  0
                ]}
                chartTitle="All event attendees range"
                y={this.state.yValue}
              />
              <p>Total attendees: {this.state.TotalAtte}</p>
            </Col>
            <Col sm={5} hidden={this.state.hidden}>
              <Chart
                dataValues={[this.state.tagBeg, this.state.tagImt, 0]}
                label={["Beginner", "Intermediate"]}
                eventType="E"
                chartTitle={"Events for " + this.state.tag}
                y={this.state.yValue}
              />
              <p>
                Total events held for {this.state.tag}:{" "}
                {this.state.tagTotalEvent}
              </p>
              <Chart
                dataValues={[
                  this.state.tag0,
                  this.state.tag10,
                  this.state.tag10more,
                  0
                ]}
                chartTitle={this.state.tag + " event attendees range"}
                y={this.state.yValue}
              />
              <p>
                Total attendees for {this.state.tag} events:{" "}
                {this.state.tagTotalAtt}
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default Report4;
