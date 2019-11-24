import React from 'react';
import { Col, Row } from "react-bootstrap";

const List = (props) => {
    //console.log({props});
    const Organiser = props.Event.organiser;
    console.log(Organiser);
    return(
        <Row>
            <Col sm={2}>Envent ID: {props.Event.id}</Col>
            <Col sm={3}>Event tilte: {props.Event.title}</Col>
            <Col sm={4}>Event description: {props.Event.description}</Col>
            <Col sm={3}>Organiser name: </Col>
        </Row>
    )
}

export default List;